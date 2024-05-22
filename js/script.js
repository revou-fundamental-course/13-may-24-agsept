document.getElementById('triangle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai dari input
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    // Log nilai untuk debugging
    console.log("Base:", base);
    console.log("Height:", height);
    console.log("Side A:", sideA);
    console.log("Side B:", sideB);
    console.log("Side C:", sideC);

    // Validasi input
    if (isNaN(base) || isNaN(height) || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Semua input harus berupa angka.');
        return;
    }

    // Menghitung luas segitiga
    const luas = 0.5 * base * height;

    // Menghitung keliling segitiga
    const keliling = sideA + sideB + sideC;

    // Log hasil untuk debugging
    console.log("Luas:", luas);
    console.log("Keliling:", keliling);

    // Menampilkan hasil
    document.getElementById('luas').textContent = luas.toFixed(2);
    document.getElementById('keliling').textContent = keliling.toFixed(2);
});
