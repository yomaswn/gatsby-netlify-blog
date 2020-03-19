---
template: BlogPost
path: /push-local-project-github
date: 2020-03-19T02:49:57.193Z
title: Menghubungkan lokal project ke GitHub
publish: true
tags:
  - github
thumbnail: /assets/local-github.JPG
---
#### Memulai project

![](/assets/Screen Shot 2020-03-19 at 10.02.20 AM.png)

Disini kita membuat sebuah folder dengan nama `local-to-github` dan kemudian meninisialisasi folder tersebut dengan perintah `git init`.

#### Membuat repo kosong di github

* Login pada akun github kamu
* Pada pojok kanan atas kamu akan melihat icon '+' untuk menambahkan repositori baru
* Beri nama repositori dengan nama yang sama yang telah kita buat sebelumnya, pada contoh sebelumya kita membuat repositori/folder lokal dengan nama `local-to-github`. Kamu bisa menambahkan readme file atau gitignore

#### Mengkoneksikan repositori lokal ke github

* Buka terminal tempat kita membuat repositori lokal tadi
* Ketikkan `git remote add origin [url web repositori github yang akan dikoneksikan]`. Contoh: `git remote add origin https://github.com/yomaswn/local-to-github`
* Terlebih dulu pull data dari repositori github dengan mengetikkan `git pull origin master`

#### Push data ke github

Kita bisa mencoba untuk menambahkan data pada repositori yang telah kita buat, untuk kemudian kita push ke repo di github

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>

  <body>
    <h1>Title Page</h1>
    <p>The content of the document......</p>
  </body>
</html>
```

Kita namai ini dengan index.html kemudian, tambahkan dengan perintah `git add .` di terminal kemudian commit `git commit -m 'Tambahkan index page'`. Push ke github dengan `git push origin master`

![](/assets/Screen Shot 2020-03-19 at 10.37.08 AM.png)

[yomaswn/local-to-github](https://github.com/yomaswn/local-to-github)
