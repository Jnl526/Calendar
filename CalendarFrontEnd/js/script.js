const app = document.getElementById('calendar');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

// API Calls

var request = new XMLHttpRequest();
var url = 'http://localhost:3001/api/v1/events/' ;

// GET

request.open('GET', url , true);
request.onload = function () {
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(event => {
      const events = document.getElementById('events');
      const h5 = document.createElement('h5');
      h5.textContent = event.title;

      const p = document.createElement('p');
      p.textContent = event.description;

      

      const span = document.createElement('span');
      let sTime = moment(event.start_time).format('hh:mm A'),
          eTime = moment(event.end_time).format('hh:mm A'),
          eDate = moment(event.start_time).format('dddd MM YYYY');
      span.textContent = `${sTime + "-" + eTime}`;
      
      const em = document.createElement('em');
      em.textContent = eDate;
      
      
      
      events.appendChild(h5);
      events.appendChild(p);
      h5.appendChild(span);
      h5.appendChild(em);
    
    });
  } else {
    console.log('error');
  }
}

request.send();

// POST

var form = document.getElementById('events');
var formData = new FormData(form);

request.open('POST', url, true);

//Send the proper header information along with the request
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

request.onreadystatechange = function() {//Call a function when the state changes.
    if(request.readyState == 4 && request.status == 200) {
        alert(request.responseText);
    }
}
request.send(formData);




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

