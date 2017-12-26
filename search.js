const API_KEY = "c04c6f3a6b250f5dd4a8f2864e0620d5";
const APP_ID = "ff6e13d9"


var parseResponse = function() {
    var response = JSON.parse(this.response);
    console.log(response);
    var results = response.matches;
    for(var i = 0; i < 10; i++) {
      console.log(results[i]);
      var namePrint = document.createElement('h4');
      namePrint.append(document.createTextNode(results[i].recipeName));
      var timePrint = document.createElement('p');
      var totaltime = results[i].totalTimeInSeconds/60;
      timePrint.append(document.createTextNode('Total Time: ' + totaltime));
      var ratePrint = document.createElement('p');
      ratePrint.append(document.createTextNode('Rating: '+results[i].rating));
      var ingredientsPrint = document.createElement('p');
      ingredientsPrint.append(document.createTextNode('ingredients: '+ results[i].ingredients));
      var imgNode = document.createElement('img');
      imgNode.id = 'img_api';
      imgNode.src = results[i].imageUrlsBySize['90'];

      output.append(namePrint);
      output.append(imgNode);
      output.append(timePrint);
      output.append(ratePrint);
      output.append(ingredientsPrint);


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
        // ingr: search_term,
        // app_id: APP_ID,
        // app_key: API_KEY,
        // page: '0',

    }

    var xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', parseResponse);
    var url = 'http://api.yummly.com/v1/api/recipes?'+ encodeParameters(parameters);
    // var url = 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/food-database/parser?'+ encodeParameters(parameters);
    console.log(url);
    xhttp.open('GET', url);
    xhttp.send();
}

var btn = document.getElementById('search_button');
    btn.onclick = function (){
        location.reload();
    }
var search_button = document.getElementById('search_button');
search_button.addEventListener('click', doSearch);


// // click picture showing results
// var doSearch = function() {
//     var search_term = document.getElementById('search_term').value;
//     console.log(search_term);
// var rec = document.getElementById('a');
// imgNode.id = 'rec_api';
// imgNode.href = "http://api.yummly.com/v1/api/recipes?_app_id=ff6e13d9&_app_key=c04c6f3a6b250f5dd4a8f2864e0620d5&q=breakfast";
