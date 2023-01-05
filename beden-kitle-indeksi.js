let kilo = Number(prompt("Kilonuzu Giriniz: "));
let boy = Number(prompt("Boyunuzu Metre Cinsinden Giriniz: "));
let sonuc = kilo/(boy^2);

if(sonuc<18.5){
    console.log("İdeal Kilo Altındasınız.")
}

else if(sonuc>=18.5 && sonuc<=24.9){
    console.log("İdeal Kilo Aralığındasınız.")
}

else if(sonuc>=30 && sonuc <=39.9){
    console.log("İdeal Kilonun Üstünde (Obez)")
}

else if(sonuc>=40){
    console.log("İdeal Kilonun Çok Üstünde (Morbid Obez)")
}