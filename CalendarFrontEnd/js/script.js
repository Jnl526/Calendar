const app = document.getElementById('main');
// Calendar month and year

  // Get element by id
function getId(id) {
  return document.getElementById(id);
}
 // POST


// var form = document.getElementById('event-form');
// var formData = new FormData(form);
// function submitData(){
//   const title = document.getElementById('title').value;
//         description = document.getElementById('description').value,
//         date = document.getElementById('date').value,
//         start_time = document.getElementById('start_time').value,
//         end_time = document.getElementById('end_time').value;

// axios.post('http://localhost:3001/api/v1/events/', {
//     title: title,
//     description: description,
//     date: date,
//     start_time: start_time,
//     end_time: end_time
// },
// // event.preventDefault()
// )
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
// }

$(function(){
  $('#event-form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: 'http://localhost:3001/api/v1/events',
      data: $('#event-form').serialize(),
      success: function(){
        $('.modal, .modal-backdrop').hide();
        document.location.reload(true);
      }
    });
    e.preventDefault();
  });
});


$('#event-form').submit(function (evt){
  evt.preventDefault();
  window.history.back();
});



// axios.delete('http://localhost:3001/api/v1/events/', { 
//   params: {
//     id: "id"
//   },
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });

// add default values to input types date and time

    var now = moment().format("HH:mm");        
    $("input[type=time]").val(now);

    var date = moment().format('YYYY-MM-DD');
    console.log(date)
    $("input[type=date]").val(date);


// convert AM/PM to A/P
moment.updateLocale('en', {
  meridiem : function (hours, minutes, isLower) {
     if (hours > 11) {
         return isLower ? 'p' : 'P';
     } else {
         return isLower ? 'a' : 'A';
     }
 }
});