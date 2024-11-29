let dogruKelime = "javascript";

let denemeSayisi = 5;

alert("Tahmin oyununa hoş geldiniz! 5 denemeniz var.");

let tahmin1 = prompt("Tahmininiz nedir? (Deneme 1 / 5)");

if (tahmin1.toLowerCase() === dogruKelime) {
    alert("Tebrikler! Doğru kelimeyi buldunuz: " + dogruKelime);
} else {
    let tahmin2 = prompt("Yanlış tahmin! Tekrar deneyin. (Deneme 2 / 5)");

    if (tahmin2.toLowerCase() === dogruKelime) {
        alert("Tebrikler! Doğru kelimeyi buldunuz: " + dogruKelime);
    } else {
        let tahmin3 = prompt("Yanlış tahmin! Tekrar deneyin. (Deneme 3 / 5)");

        if (tahmin3.toLowerCase() === dogruKelime) {
            alert("Tebrikler! Doğru kelimeyi buldunuz: " + dogruKelime);
        } else {
            let tahmin4 = prompt("Yanlış tahmin! Tekrar deneyin. (Deneme 4 / 5)");

            if (tahmin4.toLowerCase() === dogruKelime) {
                alert("Tebrikler! Doğru kelimeyi buldunuz: " + dogruKelime);
            } else {
                let tahmin5 = prompt("Yanlış tahmin! Tekrar deneyin. (Deneme 5 / 5)");

                if (tahmin5.toLowerCase() === dogruKelime) {
                    alert("Tebrikler! Doğru kelimeyi buldunuz: " + dogruKelime);
                } else {
                    alert("Üzgünüm, deneme hakkınız bitti. Doğru kelime: " + dogruKelime);
                }
            }
        }
    }
}
