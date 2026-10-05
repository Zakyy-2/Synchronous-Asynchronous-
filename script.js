// === CONTOH SYNCHRONOUS ===
console.log("--- 1. SYNCHRONOUS ---");
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");

// === CONTOH ASYNCHRONOUS ===
console.log("--- 2. ASYNCHRONOUS ---");

// Cara 1: Callback
function hitungCallback(callback) {
    setTimeout(() => {
        callback("Cara 1: Callback Selesai!");
    }, 1000);
}
hitungCallback((hasil) => console.log(hasil));

// Cara 2: Promise
const hitungPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Cara 2: Promise Selesai!");
    }, 1500);
});
hitungPromise.then((hasil) => console.log(hasil));

// Cara 3: Async / Await
const janji = () => new Promise((resolve) => setTimeout(() => resolve("Cara 3: Async/Await Selesai!"), 2000));
async function jalankanAsync() {
    const hasil = await janji();
    console.log(hasil);
}
jalankanAsync();