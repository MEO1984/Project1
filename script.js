var searchBtn = document.querySelector('.click');
var searchInput = document.querySelector('#inputSearch')
var city = "Pittsburgh";
var tester = document.querySelector("#theImg1");
var searchResult2 = document.querySelector("#section2");

function test() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);

        document.querySelector('#eventHeader').textContent += "Events in  " + city;
        for (var j = 0; j < 19; j++) {
            var div = document.createElement('div');
            div.setAttribute('class', "divider");
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            div3.setAttribute('class', "col m6")
            var section = document.createElement('section');
            section.setAttribute('class', 'section');
            var h5 = document.createElement("h5");
            h5.textContent = response._embedded.events[j].name;
            var button = document.createElement('button');
            button.setAttribute('class', 'buttonID');
            // button.setAttribute('class', "eventSelect");
            button.textContent = "Event Details";
            var img = document.createElement("img");
            img.src = (response._embedded.events[j].images[0].url);



            document.querySelector(".list").appendChild(div).parentNode.appendChild(section).appendChild(div3).appendChild(h5).parentNode.appendChild(button).parentNode.parentNode.appendChild(div2).appendChild(img)


        }


        for (var i = 0; i < 10; i++) {
            var one = response._embedded.events[i]._embedded.venues[0].name;
            console.log(one);
        }
    })



}
// test();

searchBtn.addEventListener("click", function (event) {

    event.preventDefault();

    city = inputSearch.value;
    console.log(city);

});

function test2() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&city=New York&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        console.log(response._embedded.events[0].images[0].url);
        document.querySelector(".large1").setAttribute("src", response._embedded.events[0].images[0].url);
        document.querySelector(".small1").setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector(".small2").setAttribute("src", response._embedded.events[10].images[0].url);
    }
    )
};

// test2();

function test3() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?segmentName=Sports&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        console.log(response._embedded.events[0].images[0].url);
        var sport1 = document.querySelector(".sport1");
        console.log(sport1);
        document.querySelector(".sport1").firstChild.setAttribute("src", response._embedded.events[0].images[0].url);
        document.querySelector("#sport1a").firstChild.textContent += response._embedded.events[0].name;
        document.querySelector(".sport2").firstChild.setAttribute("src", response._embedded.events[2].images[0].url);
        document.querySelector("#sport2a").firstChild.textContent += response._embedded.events[2].name;
        document.querySelector(".sport3").firstChild.setAttribute("src", response._embedded.events[4].images[0].url);
        document.querySelector("#sport3a").firstChild.textContent += response._embedded.events[4].name;
        document.querySelector(".sport4").firstChild.setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector("#sport4a").firstChild.textContent += response._embedded.events[6].name;
        document.querySelector(".sport5").firstChild.setAttribute("src", response._embedded.events[8].images[0].url);
        document.querySelector("#sport5a").firstChild.textContent += response._embedded.events[8].name;
        document.querySelector(".sport6").firstChild.setAttribute("src", response._embedded.events[10].images[0].url);
        document.querySelector("#sport6a").firstChild.textContent += response._embedded.events[10].name;
    }
    )
};

// test3();

function test4() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&city=New York&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);

        document.querySelector(".concert1").firstChild.setAttribute("src", response._embedded.events[0].images[0].url);
        document.querySelector("#concert1a").firstChild.textContent += response._embedded.events[0].name;
        document.querySelector(".concert2").firstChild.setAttribute("src", response._embedded.events[2].images[0].url);
        document.querySelector("#concert2a").firstChild.textContent += response._embedded.events[2].name;
        document.querySelector(".concert3").firstChild.setAttribute("src", response._embedded.events[4].images[0].url);
        document.querySelector("#concert3a").firstChild.textContent += response._embedded.events[4].name;
        document.querySelector(".concert4").firstChild.setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector("#concert4a").firstChild.textContent += response._embedded.events[6].name;
        document.querySelector(".concert5").firstChild.setAttribute("src", response._embedded.events[8].images[0].url);
        document.querySelector("#concert5a").firstChild.textContent += response._embedded.events[8].name;
        document.querySelector(".concert6").firstChild.setAttribute("src", response._embedded.events[10].images[0].url);
        document.querySelector("#concert6a").firstChild.textContent += response._embedded.events[10].name;


        }


        
    )}



test4();
