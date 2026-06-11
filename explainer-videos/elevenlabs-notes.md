# ElevenLabs Voiceover Notes

Use ElevenLabs for the final voiceover. The current Mac voice files are only draft timing tracks.

## Recommended Voice Direction

Look for a female voice with:

- warm
- natural
- calm
- professional
- conversational
- not salesy
- British, Irish, or neutral English accent

Avoid voices labelled:

- announcer
- trailer
- energetic
- influencer
- corporate promo

## First Sample Text

Generate this first before doing the full scripts:

> Start here. This is the Qualified queue. These are the leads worth checking first. If a lead is not a fit, click Not Relevant. It drops out of the working list, but you can bring it back later.

## Suggested Settings

- Stability: `0.42`
- Similarity boost: `0.82`
- Style: `0.28`
- Speaker boost: on

If it sounds too flat, increase style slightly.
If it sounds too dramatic, increase stability and reduce style.

## Generate Final Audio

From this folder:

```bash
ELEVENLABS_API_KEY=your_key_here python3 generate_elevenlabs_audio.py --voice-id your_voice_id_here
```

This writes:

- `audio/lead-scout-elevenlabs.mp3`
- `audio/content-radar-elevenlabs.mp3`

Once the files sound right, update `index.html` to use those MP3s instead of the draft WAV files.
