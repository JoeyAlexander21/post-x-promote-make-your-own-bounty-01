[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/JoeyAlexander21/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/JoeyAlexander21/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the [make.fun bounty "Promote make.fun's make-your-own-bounty post on X"](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01) — $250 in USDC.

# Promote make.fun's make-your-own-bounty post on X

Entry untuk bounty make.fun **post-x-promote-make-your-own-bounty-01**.

- Hadiah: **$250, 50 tempat dibayar** (juara 1: $50, juara 2: $30, juara 3: $15,
  juara 4–10: $5, juara 11–50: $3)
- Deadline: **26 Nov 2026 18:35 UTC = 27 Nov 2026 01:35 WIB**
- Entrant: Alexander — make.fun `@joey-alexander21`, wallet Solana
  `7vmsx3zAhxqKEwe6eNQGwd6FCPaDfhM3DTjDCyw2wTts`
- Status: **siap kecuali posting X** — lihat "Yang masih kurang" di bawah.

## Yang dibangun

| File | Isi |
| --- | --- |
| `main.ts` | Program Node 22, standard library only. Membaca `POST.json` dari root repo, memvalidasi URL-nya benar-benar alamat post X (bukan placeholder), lalu menyalinnya ke output dir tempat gate membacanya. Tanpa network, tanpa jam, deterministik. |
| `POST.json` | Template persis format kit: `{"url": "..."}`. Masih placeholder — lihat bawah. |
| `POST_DRAFTS.md` | 3 draf teks post (Bahasa Inggris) + aturan wajib + checklist posting. |
| `assets/poster.png` | Poster pendukung orisinal 2048×1152 buatan agent untuk dilampirkan ke post. |
| `LICENSE` | MIT (OSI-approved, sesuai syarat kit). |

## Post make.fun yang harus di-quote

**https://x.com/makefunai/status/2124915864336236646** — akun `@makefunai`.

Isinya: siapa pun kini bisa membuat bounty sendiri di make.fun — deskripsikan
tugas apa saja, tentukan hadiah dan entry fee, dan simpan sebagian dari setiap
fee yang dibayar untuk ikut; para AI agent berkompetisi, entri terbaik dibayar.
Halaman pembuat bounty: https://make.fun/sponsor/new

Cara masuk: quote post itu (tombol Repost → Quote) ATAU post baru yang
teksnya me-link alamat post itu. Reply, repost polos, atau post yang cuma
menyebut @makefunai = diskualifikasi.

## Draf post (lengkap di POST_DRAFTS.md)

**Draf 1 — rekomendasi:**

> If you could pay an AI agent to build ONE thing, what would it be? 👀
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> Reply with your idea — I'll quote the best one. makefun-___-___-___

Draf 2 ("Stop begging your agent…") dan Draf 3 ("I just found out anyone can
post a paid bounty…") ada di `POST_DRAFTS.md`. Semua draf berisi baris wajib
`Make your own bounty on @makefunai: https://make.fun/sponsor/new` dan slot
play code — **ganti `makefun-___-___-___` dengan play code asli** dari
`GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code`
(`?n=0` s.d. `?n=3`, salah satu saja cukup). Play code belum bisa diambil di
sesi ini karena butuh login/akses akun make.fun.

**Foto:** lampirkan `assets/poster.png` ke post. Poster ini orisinal (tanpa
logo make.fun — aturan kit: mark/wordmark harus dari press pack dan dipakai
apa adanya, tidak digambar ulang). Alternatif: screenshot
https://make.fun/sponsor/new.

## Cara menang — ini bounty promosi, bukan bounty kode

Skor = **replies + reposts + quotes**. Views dan likes TIDAK dihitung.
Papan peringkat di-update max tiap 15 menit; pembacaan terakhir saat deadline
yang menentukan.

Fakta dari papan saat riset (25 Nov 2026): sudah ~901 entri, dan sebagian
besar skor yang terlihat masih 0–2. Artinya **segelintir interaksi asli pun
berpeluang masuk 50 besar** — tapi hanya kalau post-nya benar-benar memancing
balasan. Karena itu Draf 1 memakai pertanyaan terbuka + janji membalas.

Strategi realistis (tanpa melanggar aturan):

1. Posting SECEPATNYA — makin lama tayang, makin banyak waktu kumpul replies.
   Waktu posting terbaik: jam ramai X (siang–sore WIB).
2. Tulis pertanyaan yang gampang dijawab ("what would YOU build?") — orang
   membalas ide mereka sendiri, bukan sekadar like.
3. Balas SETIAP reply dengan cepat dan dengan pertanyaan lanjutan — tiap
   balasan orang lain menambah skor, dan balasanmu memancing balasan lagi.
   (Balasan dari akunmu sendiri ke post-mu sendiri TIDAK dihitung dan bisa
   mendiskualifikasi — jadi balaslah reply orang lain, jangan reply post
   sendiri.)
4. Bagikan post ke komunitas yang relevan (grup builder/AI) SATU kali dengan
   kata-kata sendiri; jangan spam post yang sama berulang-ulang.
5. Jangan pernah beli replies/reposts/quotes, jangan pakai bot/pod, jangan
   repost dari akun lain yang kamu kontrol — semua itu diskualifikasi.
6. Post dan akun tetap publik sampai hasil keluar.

## Langkah bossqu selanjutnya

1. **Kasih handle X** yang dipakai posting (akun X sudah terhubung ke akun
   make.fun, tapi handle-nya belum diketahui di sini).
2. **Ambil play code** dari make.fun (endpoint di atas, atau profil) dan
   gantikan `makefun-___-___-___` di draf yang dipilih.
3. **Posting di X** dari akun publik itu: quote post make.fun di atas,
   tempel draf + `assets/poster.png`, sebelum deadline.
4. **Salin URL post** (Share → Copy link, format
   `https://x.com/<handle>/status/<id>`) dan isi ke `POST.json`
   menggantikan placeholder.
5. Beri tahu Jawa — Jawa push repo ke GitHub + bundle transcript + submit.

## Yang masih kurang untuk submit

- [ ] Handle X bossqu (BLOCKED — belum ada)
- [ ] Play code asli (butuh akses akun make.fun / bossqu)
- [ ] Post X benar-benar terbit + URL-nya diisi ke `POST.json`
- [ ] Push repo ke GitHub (repo publik milik bossqu, dibuat setelah bounty
      dibuka, lisensi MIT sudah ada) — BELUM dilakukan, sesuai instruksi
- [ ] Bundle transcript sesi agent yang membangun entry ini
      (`node cli/makefun.mjs bundle` dari kit) + `check` + `submit` —
      BELUM dilakukan, sesuai instruksi

## Menjalankan program secara lokal

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Dengan `POST.json` masih placeholder, program sengaja gagal dengan pesan yang
jelas. Setelah URL asli diisi, `out/POST.json` berisi alamat kanonisnya
(`https://x.com/<handle>/status/<id>`) — link yang disalin dari X dengan
parameter pelacak (`?s=20` dsb.), host mobile/www, atau garis miring di akhir
tetap menghasilkan output yang sama.
