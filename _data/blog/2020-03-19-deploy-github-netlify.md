---
template: BlogPost
path: /deploy-github-netlify
date: 2020-03-19T09:59:31.243Z
title: Deploy website dari github ke netlify gratis
publish: true
tags:
  - github
thumbnail: /assets/build-netlify.JPG
---

#### Memulai project

Kamu bisa mendaftar netlify menggunakan akun github, setelah itu akan muncul seperti gambar di bawah ini untuk menu utama pada netlify.

![](/assets/net1.png)

Klik `New site from Git` untuk memulai kemudian pilih sumber repo yang ingin kamu deploy melalui netlify ini, bisa dari github, bitbucket ataupun gitlab.

![](/assets/net2.png)

Kemudian silahkan pilih nama repositori yang ingin dideploy.

![](/assets/net3.png)

Karena disini saya menggunakan react dan command untuk membuild adalah dengan `npm run build`, ini disesuaikan dengan project yang kamu gunakan.

![](/assets/net4.png)

Hal yang menurut saya menarik dari netlify ini adalah kita cukup melakukan perubahan pada repo, commit dan push maka netlify akan secara otomatis membuild ulang berdasarkan perubahan terakhir yang kita lakukan.

Untuk live demo bisa kunjungi disini [github-search-user](https://github-su.netlify.com/)
