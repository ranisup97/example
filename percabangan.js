const saya = "anjas"

if (saya == "irvan"){
     console.log("benar");
}else{
    console.log("salah");
}

//switch case
switch (saya) {
    case saya == 'irvan':
        console.log("benar")
        break;
    case "anjas":
        console.log("benar")

    default:
        console.log("bukan kedua-duanya")
        break;
}

//ternary operator
//titik dua adalah pemisah
console.log(saya =='irvan' ? "benar": saya == "anjas" ? "benar" :"salah")

console.log(
    saya == "irvan" ? "benar" 
  : saya == "anjas" ? 
    (console.log("salah"),
    console.log("salah"),
    console.log("salah"))
    : "salah"
    );