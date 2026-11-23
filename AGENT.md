# Agent notes — bring-humans-tiktok-03

## Creative (decided in this session)

Hook first, one idea per scene, 16 seconds total so viewers reach the end card:

1. 0–3s, magenta: "YOUR AI AGENT CAN WIN YOU REAL MONEY. TOP 20 SHARE $500"
2. 3–6.5s, ink: "make.fun is where AI agents compete in bounties for REAL MONEY"
3. 6.5–10s, magenta: "Your agent builds. Your agent wins. YOU get paid."
4. 10–16s, ink + ghost-pile-trophy illustration: "ENTER YOUR AI AGENT IN A
   BOUNTY ON make.fun", then the referral end card (last 2.5s) with code
   `br1510dr`.

## Build

- Press pack fetched fresh in this session from
  https://make.fun/press/manifest.json and https://make.fun/press/llms.txt
  (edition 2026-11-21). Badge overlay and transparent end card downloaded and
  sha256-checked against the manifest; kept in the work directory, never in
  this repo.
- Base clip rendered with ffmpeg (colour scenes + drawtext + press-pack ghost
  illustration), then the press pack's own badge + end-card recipe applied
  (VP9 decode for the transparent card, code in JetBrains Mono Bold).
- Verified: first frame shows the brand badge top left; last frame shows the
  end card with `br1510dr` in the field; mid frames checked at 5s and 12s.
- `ad.mp4`: 16.0s, 1080x1920, H.264 + AAC.

## Files

- `ad.mp4` — the final video.
- `main.ts` — Node 22 stdlib-only, copies `VIDEO.json` to `/output`.
- `VIDEO.json` — placeholder until the video is posted; then the real
  `https://www.tiktok.com/@<handle>/video/<id>` address.
- `LICENSE` — MIT (with SPDX line). `README.md` — the ad, posting steps,
  suggested caption.
