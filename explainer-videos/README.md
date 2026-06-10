# MacFire Produced Explainer Videos

This folder contains produced first-pass explainer walkthroughs for:

- AI Lead Scout
- Content Radar approval and scheduling

Open `index.html` in a browser to play the walkthroughs. Each walkthrough has:

- a live-dashboard-matched screen
- timed mouse/cursor movement married to the talk track
- practical handover narration
- a play control
- separate tabs for Lead Scout and Content Radar

The current `index.html` was rebuilt against the live AI Lead Scout dashboard and the live Content Radar preview dashboard, rather than the first generic mockup version.

The current scripts are written as "how to use this today" handovers. For final delivery, replace the local macOS draft voice with a higher-quality voice from ElevenLabs or OpenAI TTS after choosing the voice style.

## Files

- `index.html` - the playable explainer-video page
- `lead-scout-voiceover.txt` - narration script for the Lead Scout video
- `content-radar-voiceover.txt` - narration script for the Content Radar video
- `audio/lead-scout-human-demo.wav` - current practical handover narration used by the browser player
- `audio/content-radar-human-demo.wav` - current practical handover narration used by the browser player
- `audio/lead-scout-female.wav` - earlier Moira female voiceover
- `audio/content-radar-female.wav` - earlier Moira female voiceover
- `audio/lead-scout-soft.wav` - earlier soft voice attempt
- `audio/content-radar-soft.wav` - earlier soft voice attempt
- `audio/lead-scout.wav` - earlier generated voiceover audio
- `audio/content-radar.wav` - earlier generated voiceover audio
- `audio/lead-scout.aiff` - original generated voiceover audio
- `audio/content-radar.aiff` - original generated voiceover audio
- `exports/` - reserved for MP4/MOV exports

## Export Note

A true MP4/MOV export still needs one of:

- macOS Screen Recording permission for `screencapture`, or
- a local video encoder such as `ffmpeg`.

The first export attempt was blocked by macOS screen-capture permissions, so this folder currently contains the finished browser-playable versions and voiceover assets rather than encoded MP4 files.
