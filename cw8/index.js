// function cenaPlotu() {
//     let pelnaCena = 0;
//     let cenaWykonania = 0;
//
//     let zawartoscDzialki = document.getElementById("zawartosc").selectedOptions;
//     var values = Array.from(zawartoscDzialki).map(({ value }) => value);
//     let dlugosc = document.forms["dzialka"]["length"].value;
//     let szerokosc = document.forms["dzialka"]["width"].value;
//     let obwodDzialki = (szerokosc*2)+(dlugosc*2);
//     let material = document.forms["dzialka"]["materials"].value;
//     let cenaMaterialu = 0;
//     switch (material) {
//         case "wood":
//             cenaMaterialu = 100;
//             break;
//         case "stone":
//             cenaMaterialu = 150;
//             break;
//         case "brick":
//             cenaMaterialu = 200;
//             break;
//         case "metal":
//             cenaMaterialu = 300;
//             break;
//     }
//     let firmaRobi = document.forms["dzialka"]["firma"].value;
//     if(firmaRobi == "tak"){
//         cenaWykonania = 100*obwodDzialki;
//         pelnaCena = (cenaMaterialu*obwodDzialki)+cenaWykonania;
//     }else{
//         pelnaCena = cenaMaterialu*obwodDzialki;
//     }
//     document.getElementById("output").innerHTML = ("Obwód działki - "+obwodDzialki+"m <br>");
//     document.getElementById("output").innerHTML += ("Cena materiałów -"+cenaMaterialu*obwodDzialki+"zł<br>");
//     document.getElementById("output").innerHTML += ("Cena wykonania -"+cenaWykonania+"zł<br>");
//     document.getElementById("output").innerHTML += ("Pełna cena - "+pelnaCena+"zł");
//     document.getElementById("output").innerHTML += "Zawartość działki: <br>";
// }
function informacje() {
    let zamieszkanie = document.forms["form1"]["miejsceZamieszkania"].value;
    let jezyki = document.forms["form1"]["jezyki"].selectedOptions;

    for (let obj in jezyki) {
        document.write(obj.valueOf());
    }
}