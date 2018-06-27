const app = document.getElementById('main');
// Calendar month and year


// API Calls
axios.get('http://localhost:3001/api/v1/events/')
  .then(function(request){
    // console.log(request.data); 
    // console.log(request.status); 
  var data = request.data
  data.sort(function(a, b) {
    if (a.date > b.date) {
        return 1;
    } else if (a.date < b.date) {
        return -1;
    }
    return 0;
});
    if (request.status >= 200 && request.status < 400) {
      
      

    console.log(JSON.stringify(data));
      data.forEach(event => {
       
        var events = getId('events'),
              time = getId('time'); 
             
        var item = document.createElement('li'),
              title = document.createElement('h5'),
              desc = document.createElement('p'),
              span = document.createElement('span');
              
        var sTime = moment(event.start_time).format('hh:mm a'),
            eTime = moment(event.end_time).format('hh:mm a'),
            eDate = moment(event.date).format('dddd, LL');

        item.setAttribute('class', 'list-group-item');
        title.textContent = event.title;
        desc.textContent = event.description;
        span.textContent = `${sTime + "-" + eTime}`;
        
        var date = document.createElement('em');
        date.textContent = eDate;
        

        title.innerHTML+= span.outerHTML;
        item.innerHTML+= title.outerHTML + date.outerHTML + desc.outerHTML;
        events.appendChild(item);  
      });
    } else {
        var errorMessage = document.createElement('error')
        errorMessage.textContent = `It's not working`;
        main.appendChild(errorMessage);
      }
  }); 

  // Get element by id
function getId(id) {
  return document.getElementById(id);
}
 // POST


var form = document.getElementById('event-form');
var formData = new FormData(form);
function submitData(){
  const title = document.getElementById('title').value,
        description = document.getElementById('description').value,
        date = document.getElementById('date').value,
        start_time = document.getElementById('start_time').value,
        end_time = document.getElementById('end_time').value;

axios.post('http://localhost:3001/api/v1/events/', {
    title: title,
    description: description,
    date: date,
    start_time: start_time,
    end_time: end_time
},
)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
}



$('#submit').click(function(){
  $('.modal').hide();
  
});
