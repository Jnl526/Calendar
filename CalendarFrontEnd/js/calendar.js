// Calendar month and year

const header = moment().format('MMMM YYYY');
const calDate = document.getElementById('cal_date');
cal_date.textContent = header;
  
// Calendar Weekdays

const weekdayArray = moment.weekdays();
    
  weekdayArray.forEach(weekday =>{
    const day = document.getElementById('days');
    const td = document.createElement('td');
    td.textContent = weekday;
    days.appendChild(td);
  });


// Calendar Days-create an array of calendar days and dividing into smaller arrays containing 7 days.

let calDays = [];
const startDay = moment().clone().startOf('month').startOf('week');
const endDay = moment().clone().endOf('month').endOf('week');
let currentDay = moment().format("DD");
console.log(currentDay);
let date = startDay.clone().subtract(1, 'day');
console.log(date);
while (date.isBefore(endDay, 'day')) {
  calDays.push({
        days: Array(7).fill(0).map(() => date.add(1, 'day').clone().format("DD"))
    })
}

// console.log(calendar)
for (const i in calDays) {
  let days = calDays[i].days,
 // Create rows for calendar

      calendar_days = document.getElementById('calendar_days'),
      tr = document.createElement('tr');
      
      // Create cells for calendar days

    for (const j in days) {
      const td = document.createElement('td');
        td.textContent = days[j];
        tr.appendChild(td);
        // console.log(cal[j]);
        if(days[j] == currentDay){
          td.setAttribute("class", "today");
        }
      }
      calendar_days.appendChild(tr);
}






