Playlist & Song Management CLI

Deskripsi:

Aplikasi ini adalah Command Line Interface (CLI) sederhana untuk mengelola playlist dan lagu. Pengguna dapat membuat, mengupdate, menampilkan, dan menghapus playlist serta lagu dalam format JSON.

Struktur Proyek:

app.js → File utama untuk menjalankan CLI.

data.json → Menyimpan data playlist dan lagu dalam format JSON.

controller/ → Mengatur logika bisnis antara app.js dan models.

models/ → Berisi struktur data dan fungsi utama untuk mengelola playlist dan lagu.


Cara Menggunakan:

1. Menampilkan Daftar Playlist

node app.js "show playlist"

Menampilkan semua playlist beserta lagunya.

2. Membuat Playlist Baru

node app.js create playlist "Nama Playlist"

Membuat playlist baru dengan nama yang diberikan.

3. Mengupdate Nama Playlist

node app.js update playlist "Nama Lama" "Nama Baru"

Mengubah nama playlist dari nama lama ke nama baru.

4. Menghapus Playlist

node app.js delete playlist "Nama Playlist"

Menghapus playlist berdasarkan nama.

5. Menampilkan Lagu dalam Playlist

node app.js show song "Nama Playlist"

Menampilkan semua lagu dalam playlist yang dipilih.

6. Menambahkan Lagu ke Playlist

node app.js add song "Nama Lagu" "Durasi" "Genre" "Nama Playlist"

Menambahkan lagu ke playlist tertentu.

7. Mengupdate Nama Lagu

node app.js update song "Nama Lama" "Nama Baru" "Nama Playlist"

Mengubah nama lagu di dalam playlist.

8. Menghapus Lagu dari Playlist

node app.js delete song "Nama Lagu" "Nama Playlist"

Menghapus lagu dari playlist tertentu.


Teknologi yang Digunakan:

Node.js → Untuk menjalankan aplikasi.

JavaScript → Bahasa pemrograman utama.

JSON → Untuk menyimpan data playlist dan lagu.