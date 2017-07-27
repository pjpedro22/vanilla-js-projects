//return a fetch request with your url, similar to the other exercise
//This starts a promise chain
//You'll need to have a .then(response => response.json) after your fetch request, like in the weather app
//This passes the response into the .json() promise function, it will parse an https response into json format

//Then, you'll need to have a .then that takes this newly parse object and extract the array of photos. These photos, which are in the
//response.photos.photo array and iterate over the object value, either in map or forEach.
//The goal is to return an array of new objects that have values from the response
//made into links, a large link, a thumb link, and then just the title. {title: photo.title}, as an example.


var FLICKR_API_URL = 'https://api.flickr.com/services/rest/';
var FLICKR_API_KEY = '8edf3c19c51d3c15e6d2330261c531eb';

function getPhotosForSearch(searchTerm) {
  var url = `${FLICKR_API_URL}?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=${FLICKR_API_KEY}&text=${searchTerm}`;

  return (
    fetch(url)
    .then(response => response.json())
    //need to change this part
    .then(data => data.response.photos.photo, console.log(data.response.photos.photo))
  );

//       var title = title;
//       var large = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_q.jpg`;
//       var thumb = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_t.jpg`;
}

var app = document.querySelector('#app');
var picForm = app.querySelector('.pic-form');
var clickButton = app.querySelector('.get-pic-button')
console.log(picForm);

clickButton.addEventListener('click', function(event) {
  console.log('hello')
});
