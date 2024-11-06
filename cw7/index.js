var date = new Date(2025,6,9);
var bdayDate = new Date(2024,6,8);
var toBday = 0;

var day = "";
var month = "";

switch (date.getDay())
{
    case 0:
        day = "niedziela";
        break;
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


toBday = Math.ceil((Date.parse(bdayDate)-date.getTime())/1000/60/60/24);
if(toBday<0)
{
    bdayDate.setFullYear(bdayDate.getFullYear()+1);
    toBday = Math.ceil((Date.parse(bdayDate)-date.getTime())/1000/60/60/24);
}
document.write(toBday);
if(toBday > 1)
{
    document.getElementById('bottom').innerHTML = "Do moich urodzin zostało "+toBday+" dni";
}else if(toBday == 1){
    document.getElementById('bottom').innerHTML = "Do moich urodzin został "+toBday+" dzień";
}else{
    document.getElementById('bottom').innerHTML = "Dzisiaj są moje urodziny!";
}
document.getElementById('month').innerHTML = month;
document.getElementById('year').innerHTML = date.getFullYear();
document.getElementById('date').innerHTML = date.getDate();
if(day == "niedziela")
{
    document.getElementById('day').style.color = "red";
    document.getElementById('date').style.color = "red";
}else{
    document.getElementById('day').style.color = "black";
    document.getElementById('date').style.color = "black";
}
document.getElementById('day').innerHTML = day;
