var date = new Date();
var bdayDate = new Date(date.getFullYear(),6,8);
var toBday = 0;


const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
const month = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

toBday = Math.ceil((Date.parse(bdayDate)-date.getTime())/1000/60/60/24);
if(toBday<0)
{
    bdayDate.setFullYear(bdayDate.getFullYear()+1);
    toBday = Math.ceil((Date.parse(bdayDate)-date.getTime())/1000/60/60/24);
}
switch (toBday) {
    case 0:
        document.getElementById('bottom').innerHTML = 'Dziś są urodziny!';
        break;
    case 1:
        document.getElementById('bottom').innerHTML = 'Jutro są urodziny!';
        break;
    default:
        document.getElementById('bottom').innerHTML = 'Do moich urodzin zostało ' + toBday + ' dni';
        break;
}


document.getElementById('month').innerHTML = month[date.getMonth()];
document.getElementById('year').innerHTML = date.getFullYear();

document.getElementById('date').innerHTML = date.getDate();
document.getElementById('day').innerHTML = days[date.getDay()];
