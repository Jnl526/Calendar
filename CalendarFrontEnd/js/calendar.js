// Call API

axios.get('http://localhost:3001/api/v1/events/')
  .then(function(request){
    this.data = request.data
  this.data.sort(function(a, b) {
    if (a.date > b.date) {
        return 1;
    } else if (a.date < b.date) {
        return -1;
    }
    return 0;
});
if (request.status >= 200 && request.status < 400) {

// Create Event List

  for (var i = 0; i < this.data.length; i++) {
    var event = this.data[i];
        var events = document.getElementById('events'),
              time = document.getElementById('time'); 
             
        var item = document.createElement('li'),
              title = document.createElement('h5'),
              desc = document.createElement('p'),
              span = document.createElement('span');
              
        this.sTime = moment.utc(event.start_time).format('hh:mm a');
        this.eTime = moment.utc(event.end_time).format('hh:mm a');
        this.eDate = moment.utc(event.date).format('dddd, LL');

        item.setAttribute('class', 'list-group-item');
        title.textContent = event.title;
        desc.textContent = event.description;
        span.textContent = `${sTime + "-" + eTime}`;
        
        var date = document.createElement('em');
        date.textContent = eDate;
        

        title.innerHTML+= span.outerHTML;
        item.innerHTML+= title.outerHTML + date.outerHTML + desc.outerHTML;
        events.appendChild(item); 
  
  }
  
  // Build Calendar App

  var calendar = function(props){

  this.props = props;

  // Weekday Array in short format

  this.weekdays = moment.weekdaysShort();

  // Month Array
  this.months =  moment.months();

  // Current month, year and day
  var date = moment();

  this.Month = date.month();
  this.Year = date.year();
  this.Day = date.date();
  this.WeekDay = date.weekday();
// console.log(this.Day)

};

// Show current month

calendar.prototype.currentMonth = function(){
  this.month(this.Year, this.Month);
};

  // Next month
  calendar.prototype.nextMonth = function(){
    if (this.Month == 11) {
      this.Month = 0;
      this.Year = this.Year +1;
    } else {
      this.Month = this.Month +1;
    }
    this.currentMonth();
  };

  // Previous month
  calendar.prototype.prevMonth = function(){
    if (this.Month == 0) {
      this.Month = 11;
      this.Year = this.Year -1;
    } else {
      this.Month = this.Month -1;
    }
    this.currentMonth();
  };
   
  calendar.prototype.month = function (year, month){
    var date = new Date(), 
    firstDay = new Date(year, month, 1).getDay(), 
    lastDay =  new Date(year, month+1, 0).getDate(), 
    prevDay = month;
        if(month == 0) {
          new Date(year-1, 11, 0).getDate();
        } else{ 
          new Date(year, month, 0).getDate();
        }
  // console.log(year, month);

  

    // Create calendar grid
   
    var html = '<table class="table table-bordered">';

    // Month and year header

    html += '<thead>';
    html += '<tr>';
    html += '<th id="month" colspan="7">';
    html += '<h4>' + this.months[month] + ' ' + year + '<h4>';
    html +=  '</th>';
    html += '</tr>';
    html += '</thead>';
    var today = moment();
    var tYear = today.year();
    var tMonth = today.month();

    // Write the header of the days of the week
    html += '<tbody>';
    html += '<tr class="days text-center">';
    
    for(var i=0; i < this.weekdays.length;i++) {
      if (tYear == this.Year && tMonth == this.Month && i == this.WeekDay) {
      html += '<td class="weekday">' + this.weekdays[i] + '</td>';
    }else{
      html += '<td >' + this.weekdays[i] + '</td>';
    }
  } 
    html += '</tr>';

  // Add days to calendar
  
    // console.log(request.data); 
    // console.log(request.status); 
  
  var i=1;
        
  do {
    var day = new Date(year, month, i).getDay();

    if ( day == 0 ) {
      html += '<tr>';
    }

    // Add days of previous month
    
    else if ( i == 1 ) {
      html += '<tr>';
      var k = prevDay - firstDay+1;
      for(var j=0; j < firstDay; j++) {
        html += '<td class="td-widget nc">';
        html += '<div>';
        html += '<div class="td-widget-inner">';
        html += '<div class=" day-number">' + k + '</div>';
        html += '</div>';
        html += '</div>';
        html += '</td>';
        k++;
      }
    }
    
  // If current day, highlight
    if (tYear == this.Year && tMonth == this.Month && i == this.Day) {
      
      html += '<td id="td-widget" data-toggle="modal" data-target="#eventModal">';
      html += '<div>';
      html += '<div class="td-widget-inner">';
      html += '<div class="today day-number" data-toggle="modal" data-target="#eventModal">' + i + '</div>';
      for(var j = 0; j < data.length; j++) {
        var event = data[j],
            edate = moment.utc(event.date).format('DD'),
            eTime = moment.utc(event.start_time).format('hh:mm a');
        // console.log(moment(event.date).format('DD'))
        if (tYear == this.Year && tMonth == this.Month && i == edate){
          html += '<div class="event-title">'+ eTime + ' '+ event.title +'</div>';
        }else{"no"}
      }
      html += '</div>';
      html += '</div>';
      html += '</td>';
    } else {
      html += '<td class="td-widget" data-toggle="modal" data-target="#eventModal">';
      html += '<div>';
      html += '<div class="td-widget-inner">';
      html += '<div class="day-number" data-toggle="modal" data-target="#eventModal">' + i + '</div>';

      // Add Event Calendar Date

      for(var j = 0; j < data.length; j++) {
        var event = data[j],
            edate = moment.utc(event.date).format('DD'),
            eTime = moment.utc(event.start_time).format('hh:mm a');
        // console.log(moment(event.date).format('DD'))
        if (tYear == this.Year && tMonth == this.Month && i == edate){
          html += '<div class="event-title">'+ eTime + ' '+ event.title +'</div>';
        }else{"no"}
      }
      
      html += '</div>';
      html += '</div>';
      html += '</td>';
      
    }
    
    if ( day == 6 ) {
      html += '</tr>';
    }
    
    else if ( i == lastDay ) {
      var k=1;
      for(day; day < 6; day++) {
      html += '<td class="td-widget nc">';
      html += '<div>';
      html += '<div class="td-widget-inner">';
      html += '<div class=" day-number">' + k + '</div>';
      html += '</div>';
      html += '</div>';
      html += '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDay);
  html += '</tbody>';
  html += '</table>';
 
  // Call HTML elements

  document.getElementById(this.props).innerHTML = html;

};

// Create Calendar
  var cal = new calendar("calendar");			
  cal.currentMonth();
  
// Prev and Next buttons
  var next = document.getElementById('btnNext').onclick = function() {
    cal.nextMonth();
  };
  var prev = document.getElementById('btnPrev').onclick = function() {
    cal.prevMonth();
  };

} else {
  var errorMessage = document.createElement('error')
  errorMessage.textContent = `It's not working`;
  main.appendChild(errorMessage);
}

});