const API_KEY = "c04c6f3a6b250f5dd4a8f2864e0620d5";
const APP_ID = "ff6e13d9"

//function for call the api's information and diaplay them in the results section.
var parseResponse = function() {
    var response = JSON.parse(this.response);
    console.log(response);
    var results = response.matches;
    if (results == 0){
      var nullPrint = document.createElement('h1');
      nullPrint.append("Sorry, we can't find the recipes.\n\n Please search again.");
      output.append(nullPrint);
    }else {
      for(var i = 0; i < 10; i++) {
        console.log(results[i]);
        var namePrint = document.createElement('h4');
        namePrint.append(document.createTextNode(results[i].recipeName));
        var timePrint = document.createElement('p');
        var totaltime = results[i].totalTimeInSeconds/60; //calculating second into minutes
        timePrint.append(document.createTextNode('Total Time: ' + totaltime));
        var ratePrint = document.createElement('p');
        ratePrint.append(document.createTextNode('Rating: '+results[i].rating));
        var ingredientsPrint = document.createElement('p');
        ingredientsPrint.append(document.createTextNode('ingredients: '+'\n'+results[i].ingredients));
        var imgNode = document.createElement('img');
        imgNode.id = 'img_api';
        imgNode.src = results[i].imageUrlsBySize['90'];


        var divCreate = document.createElement('div');//creating a div element to hold each results information.
        divCreate.id = 'description';
        divCreate.appendChild(namePrint);
        divCreate.appendChild(imgNode);
        divCreate.appendChild(imgNode);
        divCreate.appendChild(timePrint);
        divCreate.appendChild(ratePrint);
        divCreate.appendChild(ingredientsPrint);

        output.append(divCreate);

      }
    }
  }

// Function to ensure parameters used in request are encoded correctly
var encodeParameters = function(params) {
    // join all key value pairs and store in an array
    var strArray = [];
    for (var key in params) {
        if (params.hasOwnProperty(key)){
            var paramString = encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
            strArray.push(paramString);
        }
    }
    // join everything in the array together
    return strArray.join("&");
}

var doSearch = function() {
    var search_term = document.getElementById('search_term').value;
    console.log(search_term);

    parameters = {

        _app_id: APP_ID,
        _app_key: API_KEY,
        q:  search_term,

    }

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?'+ encodeParameters(parameters);
    // var url = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/food-database/parser?'+ encodeParameters(parameters);
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var search_button = document.getElementById('search_button');
search_button.addEventListener('click',doSearch);
  

// click picture showing BREAKFAST
var imgClick = function() {

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=c04c6f3a6b250f5dd4a8f2864e0620d5&q=breakfast';
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var img_api = document.getElementById('breakfast');
img_api.addEventListener('click', imgClick);

// click picture showing LUNCH
var imgClick = function() {

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=c04c6f3a6b250f5dd4a8f2864e0620d5&q=lunch';
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var img_api = document.getElementById('lunch');
img_api.addEventListener('click', imgClick);

// click picture showing DINNER
var imgClick = function() {

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'https://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=c04c6f3a6b250f5dd4a8f2864e0620d5&q=dinner';
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var img_api = document.getElementById('dinner');
img_api.addEventListener('click', imgClick);

//searching videos
const YOUR_API_KEY = "AIzaSyBqAWageRpzahJDqBvM9IQB65iK9S0nzNs";

var parseRes = function() {
    var response = JSON.parse(this.response);
    console.log(response);
    var results = response.items;
    for(var i = 0; i < 10; i++) {
      console.log(results[i]);
      var titlePrint = document.createElement('h3');
      titlePrint.append(document.createTextNode(results[i].snippet['title']));
      var desPrint = document.createElement('p');
      desPrint.append(document.createTextNode(results[i].snippet.description));
      // get videoid from results and creat a new link to play the video.
      var vlog = document.createElement('iframe');
      vlog.id = 'vlogs';
      vlog.src = "https://www.youtube.com/embed/" + results[i].id['videoId'];
      vlog.frameborder= "0"

      var divCreate = document.createElement('div');//creating a div element to hold each results information.
      divCreate.id = 'videos';
      divCreate.appendChild(titlePrint);
      divCreate.appendChild(vlog);
      divCreate.appendChild(desPrint);

      output.append(divCreate);

    }
  }
var Search = function() {
    var search_video = document.getElementById('search_video').value;
    console.log(search_video);

    parameters = {

      part:'snippet',
      maxResults: 25,
      q: search_video,
      type: 'video',
      key:YOUR_API_KEY

    }

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseRes);
    var url = 'https://www.googleapis.com/youtube/v3/search?'+ encodeParameters(parameters);
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();


}

var search_button = document.getElementById('search_button2');
search_button.addEventListener('click',Search);
