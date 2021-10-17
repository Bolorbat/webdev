const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<li class="prev-date">${prevLastDay - x + 1}</li>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<li class="today">${i}</li>`;
    } else {
      days += `<li>${i}</li>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<li class="next-date">${j}</li>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
function myFunction(){
var x = document.getElementById("myText").value;

var calendar = {January: {1: "Сайхан амарна"}, February: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, March: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, April: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"}, May: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, June: {6: "Жавхлан багшийн төрсөн өдөр"}, July: {4: "Хичээл амарсаан ураа"}, August: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, September: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, October: {13: "Сур сур бас дахин сур"}, November: {2: "Сурсаар л бай"}, December: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} };

var month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

for(let i=0; i<month.length; i++){
   for(let j=0; j<31; j++){
    if(typeof calendar[month[i]][j] !== 'undefined'){
      if(_.isEqual(x, calendar[month[i]][j])){
        document.querySelector('.date h1').innerHTML = month[i];
        var k = i+1;
        document.getElementById('1').addEventListener("click", () => {
          var p = date.getMonth()-k+1;
          date.setMonth(date.getMonth()-p);
          console.log(date.getMonth()-p);
          renderCalendar();
      });        
    }
   }
}
}
}
