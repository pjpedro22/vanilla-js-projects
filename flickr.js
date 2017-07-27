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
    .then(data => data.response.photos.photo)
  );

    var createPhotoUrl = function() {

      var title = title;
      var farm_id = farm;
      var server_id = server;
      var id = id;
      var secret = secret;
      var large = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_q.jpg`;
      var thumb = `https://farm${farm_id}.staticflickr.com/${server_id}/${id}_${secret}_t.jpg`;

      return large;
      return thumb;
      return title;
    }

    getPhotosForSearch.forEach(createPhotoUrl)
  )
}
//
// function createFlickrThumb(photoData) {
//   var link = document.createElement('a');
//   link.setAttribute('href', photoData.large);
//   link.setAttribute('target', '_blank');
//
//   var image = document.createElement('img');
//   image.setAttribute('src', photoData.thumb);
//   image.setAttribute('alt', photoData.title);
//
//   link.appendChild(image);
//
//   return link;
// }
