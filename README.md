# FITNESS TRACKER API
````
Proyek ini akan menjadi sebuah API yang memungkinkan pengguna untuk mencatat aktivitas fitness dan mengelola progress mereka. Pengguna dapat mencatat aktivitas seperti berlari, bersepeda, atau angkat beban, serta melihat riwayat aktivitas mereka dan progress yang telah dicapai. Data aktivitas dan progress akan disimpan dalam database MongoDB.
````

### FITUR
1. Register akun
2. Login
3. Menambahkan aktivitas baru ke dalam database.
4. Mendapatkan daftar aktivitas yang tersedia beserta detail informasi seperti jenis aktivitas, durasi, dan jarak/tempuh.
5. Mengedit informasi aktivitas yang sudah ada dalam database.
6. Menghapus aktivitas dari database.
7. Menambahkan progress baru ke dalam database.
8. Mendapatkan daftar progress beserta detail informasi seperti tanggal pencatatan dan jumlah yang telah dicapai.
9. Mengedit informasi progress yang sudah ada dalam database.
10. Menghapus progress dari database.

### Teknologi yang digunakan
1. node js/express
2. mongodb/mongoose
3. json web token (jwt)

### Cara Penggunaan
1. clone github
2. buat database mongodb
3. masuk ke index.js pada bagian 
mongoose
  .connect(
    `(mongodb link)`
  )
rubah mongodb link menjadi link untuk koneksi ke database mongodb
4. jalankan perintah npm install
5. jalankan perintah npm start

### Dokumentasi Penggunaan Endpoint dapat dilihat di dokumentasi postman berikut
https://documenter.getpostman.com/view/21857409/2s93RNyvAf

### Author : Yoga Rizya Pratama (yogarizya.pratama@gmail.com)
