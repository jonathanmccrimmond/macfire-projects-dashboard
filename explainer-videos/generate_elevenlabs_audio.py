#!/usr/bin/env python3
"""Generate final explainer voiceovers with ElevenLabs.

Required:
  ELEVENLABS_API_KEY

Usage:
  ELEVENLABS_API_KEY=... python3 generate_elevenlabs_audio.py --voice-id YOUR_VOICE_ID
"""

from __future__ import annotations

import argparse
import json
import os
import pathlib
import ssl
import sys
import urllib.error
import urllib.request

import certifi


BASE_DIR = pathlib.Path(__file__).resolve().parent
OUTPUTS = [
    ("lead-scout-voiceover.txt", "audio/lead-scout-elevenlabs.mp3"),
    ("content-radar-voiceover.txt", "audio/content-radar-elevenlabs.mp3"),
]


def read_text(path: pathlib.Path) -> str:
    return path.read_text(encoding="utf-8").strip()


def create_speech(
    *,
    api_key: str,
    voice_id: str,
    text: str,
    output_path: pathlib.Path,
    model_id: str,
    stability: float,
    similarity_boost: float,
    style: float,
) -> None:
    url = (
        f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
        "?output_format=mp3_44100_128"
    )
    payload = {
        "text": text,
        "model_id": model_id,
        "voice_settings": {
            "stability": stability,
            "similarity_boost": similarity_boost,
            "style": style,
            "use_speaker_boost": True,
        },
    }
    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "xi-api-key": api_key,
        },
        method="POST",
    )
    output_path.parent.mkdir(parents=True, exist_ok=True)
    try:
        context = ssl.create_default_context(cafile=certifi.where())
        with urllib.request.urlopen(request, timeout=120, context=context) as response:
            output_path.write_bytes(response.read())
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        raise SystemExit(f"ElevenLabs request failed: HTTP {exc.code}\n{body}") from exc
    except urllib.error.URLError as exc:
        raise SystemExit(
            "Could not connect to ElevenLabs.\n"
            f"Reason: {exc.reason}\n\n"
            "If this is still a certificate error, run the macOS Python "
            "'Install Certificates.command' once, or install/update certifi:\n"
            "  python3 -m pip install --upgrade certifi"
        ) from exc


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--voice-id", required=True, help="ElevenLabs voice ID to use.")
    parser.add_argument(
        "--model-id",
        default="eleven_multilingual_v2",
        help="ElevenLabs model ID. Default: eleven_multilingual_v2.",
    )
    parser.add_argument("--stability", type=float, default=0.42)
    parser.add_argument("--similarity-boost", type=float, default=0.82)
    parser.add_argument("--style", type=float, default=0.28)
    args = parser.parse_args()

    api_key = os.environ.get("ELEVENLABS_API_KEY")
    if not api_key:
        print("Missing ELEVENLABS_API_KEY environment variable.", file=sys.stderr)
        return 2

    for script_name, output_name in OUTPUTS:
        text = read_text(BASE_DIR / script_name)
        output_path = BASE_DIR / output_name
        print(f"Generating {output_path.name}...")
        create_speech(
            api_key=api_key,
            voice_id=args.voice_id,
            text=text,
            output_path=output_path,
            model_id=args.model_id,
            stability=args.stability,
            similarity_boost=args.similarity_boost,
            style=args.style,
        )

    print("Done. Update index.html to use the ElevenLabs MP3 files when approved.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
