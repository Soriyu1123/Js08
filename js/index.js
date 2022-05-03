// for the quote preferences
var quoteAPI = 'https://type.fit/api/quotes';

// 1st step - fecth the json data/api
function getQoute(){
fetch(quoteAPI)
.then(res => res.json())

// 2nd step - randomized json data
.then(data => JSON.stringify(data[Math.floor(Math.random(data)* data.length)]))

// 3rd step - showing the randomized JSON data inside the console
.then(data2 => displayQoute(`"${JSON.parse(data2).text}" - ${JSON.parse(data2).author}`))

}

// 4th step - Create a DOM inside the qoute-text class (HTML fiel)
function displayQoute(qoute) {
    
    var qouteText = document.querySelector('.quote-text');
    qouteText.textContent = qoute;
}

//5th step - clicking the next button 
var newQouteButton = document.querySelector('.new-quote');
//5.1 adding an eventListener (everytime we click the button it will change the qoute)
newQouteButton.addEventListener('click', getQoute)
getQoute();

  // Copy the qoute
var copyQoutes = document.getElementById('CQ').onclick = function (){
    navigator.clipboard.writeText(document.querySelector('.quote-text').innerText)
    .then(function(){
        alert(`TEXT COPIED`);
    });
  
    
}
