function hitungBarang(kualitas, quantity) {
    let hargaSatuan;
    let potongan = 0;

    switch (kualitas) {
        case 'A':
            hargaSatuan = 4550;
            if (quantity > 13) {
                potongan = 231 * quantity;
            }
            break;
        case 'B':
            hargaSatuan = 5330;
            if (quantity > 7) {
                potongan = 0.23 * hargaSatuan * quantity;
            }
            break;
        case 'C':
            hargaSatuan = 8653;
            potongan = 0;
            break;
        default:
            console.log("Kualitas barang tidak valid");
            return;
    }

    let totalHarga = hargaSatuan * quantity;
    let totalYangHarusDibayar = totalHarga - potongan;

    console.log(`- Total harga barang: ${totalHarga}`);
    console.log(`- Potongan: ${potongan}`);
    console.log(`- Total yang harus dibayar: ${totalYangHarusDibayar}`);
}

// Contoh penggunaan fungsi
hitungBarang('A', 14);
hitungBarang('B', 8);
hitungBarang('C', 5);
