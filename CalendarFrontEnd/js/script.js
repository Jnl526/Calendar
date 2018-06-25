const app = document.getElementById('main');
// Calendar month and year


// API Calls
axios.get('http://localhost:3001/api/v1/events/')
  .then(function(request){
    // console.log(request.data); 
    // console.log(request.status); 
  var data = request.data;
    if (request.status >= 200 && request.status < 400) {
     
     
      data.forEach(event => {
        const events = document.getElementById('events'),
              time = document.getElementById('time'),
              tdDAte = document.getElementById('date').textContent; 

        const item = document.createElement('li'),
              title = document.createElement('h5'),
              desc = document.createElement('p'),
              span = document.createElement('span');
              
        let sTime = moment(event.start_time).format('hh:mm a'),
            eTime = moment(event.end_time).format('hh:mm a'),
            eDate = moment(event.date).format('dddd, LL'),
            eventItem = moment(event.date).format('DD');;

        item.setAttribute('class', 'list-group-item');
        title.textContent = event.title;
        desc.textContent = event.description;
        span.textContent = `${sTime + "-" + eTime}`;
        
        const date = document.createElement('em');
        date.textContent = eDate;
        
        if (eventItem == tdDAte){
          
          console.log(tdDAte)
        }

        title.innerHTML+= span.outerHTML;
        item.innerHTML+= title.outerHTML + date.outerHTML + desc.outerHTML;
        events.appendChild(item);  
      });
    } else {
        const errorMessage = document.createElement('error')
        errorMessage.textContent = `It's not working`;
        main.appendChild(errorMessage);
      }
  }); 
 // POST

// var form = document.getElementById('events');
// var formData = new FormData(form);
// function submitData(){
//   const title = document.getElementById('title').value,
//         description = document.getElementById('description').value,
//         start_time = document.getElementById('start_time').value,
//         end_time = document.getElementById('end_time').value;

// axios.get('http://localhost:3001/api/v1/events/', {
//     title: title,
//     description: description,
//     start_time: start_time,
//     end_time: end_time
//   })
  
//   .then(function (response) {
//       //handle success
//       console.log(response);
//   })
//   .catch(function (response) {
//       //handle error
//       console.log(response);
//   });
// }

// const title = document.getElementById('title').value,
//         description = document.getElementById('description').value,
//         start_time = document.getElementById('start_time').value,
//         end_time = document.getElementById('end_time').value;

// addEvent = (event) => {
//   event.preventDefault();
//   axios.post("http://localhost:9292/api/v1/events", {
    
//     title: title,
//     description: description,
//     start_time: start_time,
//     end_time: end_time
//  })
//  .then(function(response){
//  this.setState({update: true})
//   }.bind(this))
// }


// var d = new Date()
// var val_date = d.toDateString();
// var dt = moment('d').format('DD/MM/YYYY, HH:MM A');
// document.getElementById("start_time").value = convetDateToIso(d);
// function convetDateToIso(d){
//   return d.getFullYear()+'-'
//        + (("0"+(d.getMonth() + 1)).slice(-2))+'-'
//        + ("0"+d.getDate()).slice(-2)+'T'
//        + ("0"+d.getHours()).slice(-2)+':'
//        + ("0"+d.getMinutes()).slice(-2)+':'
//        + ("0"+d.getSeconds()).slice(-2);
// }


// document.getElementById('event-form').addEventListener('submit', performPostRequest);

function performPostRequest(e){
  const title = document.getElementById('title').value,
        description = document.getElementById('description').value,
        start_time = document.getElementById('start_time').value,
        end_time = document.getElementById('end_time').value;
  
        axios({
          method: 'post',
          url: 'http://localhost:3001/api/v1/events/',
          data: {
            title: 'title',
            description: 'description',
            start_time: 'start_time',
            end_time: 'end_time'
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        })
    .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
  e.preventDefault();
}

// const title = document.getElementById('title').value,
//         description = document.getElementById('description').value,
//         start_time = document.getElementById('start_time').value,
//         end_time = document.getElementById('end_time').value;
        
// axios({
//   method: 'post',
//   url: 'http://localhost:3001/api/v1/events/',
//   dataType: 'json',
//   data:JSON.stringify( {
//     title: 'title',
//     description: 'description',
//     start_time: 'start_time',
//     end_time: 'end_time'
//   })
// })
//     .then(function (response) {
//         //handle success
//         console.log(response);
//     })
//     .catch(function (response) {
//         //handle error
//         console.log(response);
//     });


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
let date = startDay.clone().subtract(1, 'day');

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
      td.setAttribute("id", "date");
        td.textContent = days[j];
        tr.appendChild(td);
        // console.log(cal[j]);
        if(days[j] == currentDay){
          td.setAttribute("class", "today");
        }
      }
      calendar_days.appendChild(tr);
}


$('#submit').click(function(){
  $('.form-hide').hide();
  
});



