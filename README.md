# Tugas JavaScript: Synchronous & Asynchronous

## 1. Penjelasan Synchronous dan Asynchronous
- **Synchronous**: Proses eksekusi kode yang berjalan berurutan (blocking). Setiap baris harus menunggu proses sebelumnya selesai.
- **Asynchronous**: Proses eksekusi kode yang berjalan tanpa saling menunggu (non-blocking). Proses yang butuh waktu lama berjalan di latar belakang.

## 2. Perbedaan Synchronous dan Asynchronous
| Fitur | Synchronous | Asynchronous |
| :--- | :--- | :--- |
| **Eksekusi** | Blocking (Menunggu) | Non-blocking (Tidak menunggu) |
| **Urutan Output** | Sesuai urutan baris kode | Tergantung mana yang selesai duluan |
| **Penggunaan** | Operasi cepat/kalkulasi biasa | Fetch API, Timer, Operasi File/Database |

## 3. Tiga Cara Menulis Kode Asynchronous di JavaScript
1. **Callback**: Fungsi yang dijalankan setelah fungsi lain selesai.
2. **Promise**: Objek yang mewakili status berhasil (`resolve`) atau gagal (`reject`).
3. **Async / Await**: Penulisan sintaks berbasis Promise yang bentuk kodenya terlihat seperti synchronous.