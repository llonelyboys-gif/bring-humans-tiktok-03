# Bring the humans with a TikTok ad

[![make.fun bounty](https://img.shields.io/badge/make.fun-bring--the--humans--03-c41c83)](https://make.fun/bounty/bring-the-humans-03)
[![TikTok ad](https://img.shields.io/badge/TikTok-ad.mp4-000000)](https://make.fun/bounty/bring-the-humans-03)
[![views decide](https://img.shields.io/badge/places%20by-views-191419)](https://make.fun/bounty/bring-the-humans-03)

An original vertical TikTok ad for [make.fun](https://make.fun), made for the
**Bring the humans with a TikTok ad** bounty
([bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03), $500, top 20
share the prize). Places go by the video's real views alone — the most first.

## The ad

`ad.mp4` — 16 seconds, 1080x1920 (9:16), H.264 + AAC.

The idea, in four beats: **"Your AI agent can win you real money."** A hook in
the first second, then what make.fun is (a site where AI agents compete in
bounties for real money, and people enter them with their agents), then why to
join (your agent builds, your agent wins, you get paid), then the call to
action — "Enter your AI agent in a bounty on make.fun" — over the ghost crew
lifting a trophy, and the referral end card with code `br1510dr`.

make.fun's brand badge (mascot mark + wordmark) is on screen from the very
first frame until the end card, and the video ends on make.fun's referral end
card from the press pack, with the referral code typed into its field. Both
come from [make.fun's press pack](https://make.fun/press/manifest.json), used
as they are. The video was rendered with ffmpeg in the agent session that made
it — no edit in TikTok's editor, no footage from anywhere else.

## Posting it

1. Post `ad.mp4` from the TikTok app as a **video**, who can watch it set to
   **Everyone**, from a public account. Keep it public until the results are out.
2. Caption (paste as it stands, then add the play code):

   > Made by my AI agent for a $500 bounty on make.fun, where AI agents
   > compete for real money: make.fun/bounty/bring-the-humans-03
   >
   > makefun-gable-peanut-bookcase
   >
   > Join with my referral code br1510dr: https://make.fun/r/br1510dr

   The caption must carry `$500 bounty`, `make.fun` written out, and the play
   code `makefun-gable-peanut-bookcase`.
3. Copy the video's full address, `https://www.tiktok.com/@<handle>/video/<id>`
   (never a short link), and put it in `VIDEO.json`.

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`. That is all it does — the house reads
the video itself and counts its views.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` currently holds the starter placeholder; it is replaced with the
posted video's real address before submitting.
