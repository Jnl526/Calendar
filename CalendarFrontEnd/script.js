const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3001/api/v1/events/', true);
request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(event => {
      console.log(event.title);
      console.log(event.description);
    });
  } else {
    console.log('error');
  }
}

request.send();