var calendar = function(props){

  this.props = props;

  // weekdays in short format
  this.weekdays = moment.weekdaysShort();

  // months
  this.months =  moment.months();

  // current month, year and day
  var date = moment();

  this.Month = date.month();
  this.Year = date.year();
  this.Day = date.date();
// console.log(this.Day)
};

// Show current month

calendar.prototype.currentMonth = function(){
  this.month(this.Year, this.Month);
};

  // Show next month
  calendar.prototype.nextMonth = function(){
    if (this.Month == 11) {
      this.Month = 0;
      this.Year = this.Year +1;
    } else {
      this.Month = this.Month +1;
    }
    this.currentMonth();
  };

  // Show previous month
  calendar.prototype.prevMonth = function(){
    if (this.Month == 0) {
      this.Month = 11;
      this.Year = this.Year -1;
    } else {
      this.Month = this.Month -1;
    }
    this.currentMonth();
  };

  

  // Show month and year
  // axios.get('http://localhost:3001/api/v1/events/')
  // .then(function(request){
  //   var data = request.data;
  //   console.log(data)
    
   
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

    // Write the header of the days of the week
    html += '<tbody>';
    html += '<tr class="days">';
    for(var i=0; i < this.weekdays.length;i++) {
      html += '<td>' + this.weekdays[i] + '</td>';
    }
    html += '</tr>';

  // Write the days
  
  var i=1;
      // console.log(day)

  do {
    var day = new Date(year, month, i).getDay();
    // If start of week is Sunday, start a new row
    if ( day == 0 ) {
      html += '<tr>';
    }
    // Week starts on Sunday
    else if ( i == 1 ) {
      html += '<tr>';
      var k = prevDay - firstDay+1;
      for(var j=0; j < firstDay; j++) {
      html += '<td class="td-widget nc">';
      html += '<div>';
      html += '<div class=" day-number">' + k + '</div>';
      html += '</div>';
      html += '</td>';
        k++;
      }
    }
    

    var today = moment();
    var tYear = today.year();
    var tMonth = today.month();
    
    if (tYear == this.Year && tMonth == this.Month && i == this.Day) {
      
      html += '<td class="td-widget" data-toggle="modal" data-target="#eventModal">';
      html += '<div>';
      html += '<div class="today day-number" data-toggle="modal" data-target="#eventModal">' + i + '</div>';
      html += '</div>';
      html += '</td>';
    } else {
      html += '<td class="td-widget" data-toggle="modal" data-target="#eventModal">';
      html += '<div>';
      html += '<div class="day-number" data-toggle="modal" data-target="#eventModal">' + i + '</div>';
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
      html += '<div class=" day-number">' + k + '</div>';
      html += '</div>';
      html += '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDay);
  html += '</tbody>';
  html += '</table>';

  document.getElementById(this.props).innerHTML = html;

};
// });
    

  var cal = new calendar("calendar");			
  cal.currentMonth();
  
  var next = document.getElementById('btnNext').onclick = function() {
    cal.nextMonth();
  };
  var prev = document.getElementById('btnPrev').onclick = function() {
    cal.prevMonth();
  }

