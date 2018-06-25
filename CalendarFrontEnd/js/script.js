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




$('#submit').click(function(){
  $('.form-hide').hide();
  
});



