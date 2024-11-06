let a = Math.floor(Math.random() * 2);
if (a == 1) {
    document.getElementById('id1').innerHTML = 'Ziemniaki!';
}else{
    document.getElementById('id1').innerHTML = 'Nie ziemniaki!';
}
document.getElementById('id2').style.backgroundColor = 'blue';
var date = new Date();
let day = "";
let month = "";

switch (date.getDay())
{
    case 1:
        day = "poniedziałek";
        break;
    case 2:
        day = "wtorek";
        break;
    case 3:
        day = "środa";
        break;
    case 4:
        day = "czwartek";
        break;
    case 5:
        day = "piątek";
        break;
    case 6:
        day = "sobota";
        break;
    case 7:
        day = "niedziela";
        break;
}
switch (date.getMonth())
{
    case 0:
        month = "styczeń";
        break;
    case 1:
        month = "luty";
        break;
    case 2:
        month = "marzec";
        break;
    case 3:
        month = "kwiecień";
        break;
    case 4:
        month = "maj";
        break;
    case 5:
        month = "czerwiec";
        break;
    case 6:
        month = "lipiec";
        break;
    case 7:
        month = "sierpień";
        break;
    case 8:
        month = "wrzesień";
        break;
    case 9:
        month = "październik";
        break;
    case 10:
        month = "listopad";
        break;
    case 11:
        month = "grudzień";
        break;
}
if(date.getDate() < 10) {
    document.getElementById('dateHandler').innerHTML = "Dziś jest "
        +day+" 0"+date.getDate()+" "+month+" "+date.getFullYear()+"<br>";
}else{
    document.getElementById('dateHandler').innerHTML = "Dziś jest "
        +day+" "+date.getDate()+" "+month+" "+date.getFullYear()+"<br>";
}
if(date.getHours()<10)
{
    if(date.getMinutes()<10)
    {
        document.getElementById('timeHandler').innerHTML = '0'+date.getHours()
            +":0"+date.getMinutes();
    }else{
        document.getElementById('timeHandler').innerHTML = '0'+date.getHours()
            +":"+date.getMinutes();
    }
}else{
    if(date.getMinutes()<10)
    {
        document.getElementById('timeHandler').innerHTML = date.getHours()
            +":0"+date.getMinutes();
    }else{
        document.getElementById('timeHandler').innerHTML = date.getHours()
            +":"+date.getMinutes();
    }
}

var dateToCount = new Date(2024,11,24);
let differenceFromDate = Math.ceil((Date.parse(dateToCount)-date.getTime())/1000/60/60/24);
document.write("Do wigilii zostało "+differenceFromDate);

