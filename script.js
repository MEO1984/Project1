var searchBtn = document.querySelector('#click');
var searchInput = document.querySelector('#inputSearch')
var city = "";
var tester = document.querySelector("#theImg1");
var searchResult2 = document.querySelector("#section2");
var list = document.querySelector(".list");
var keyword = "";
var searchBtn2 = document.querySelector('#click2');
var work = 0;
var ticketUrl = "";
var destination = "";
var finalDestination = document.querySelector("#end");
var buyTickets = document.querySelector('#priceBtn');
var getDirections = document.querySelector('#directions')
var eventTitle = document.querySelector('.eventTitle');

// function makes list of events based on city input
function test() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        $('.divider').remove();
        $('.section').remove();


        document.querySelector('#eventHeader').textContent = "Events in  " + city;
        for (var j = 0; j < 19; j++) {


            // button.setAttribute("data-info",j);
            var div = document.createElement('div');
            div.setAttribute('class', "divider");
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            div3.setAttribute('class', "col m6")
            var section = document.createElement('section');
            section.setAttribute('class', 'section');
            var h5 = document.createElement("h5");
            h5.textContent = response._embedded.events[j].name;
            var p = document.createElement("p");
            p.textContent = moment(response._embedded.events[j].dates.start.localDate).format("MMM Do YYYY");
            p.setAttribute('id', 'eventDetails');

            var button = document.createElement('a');
            button.setAttribute('class', 'wave-effect waves-light btn modal-trigger buttonID');
            button.setAttribute('href', "#modal1");
            button.text = "More Event Details";
            button.setAttribute('data-info', j);
            console.log("buttonclicked");

            
            button.setAttribute('data-dest', response._embedded.events[j]._embedded.venues[0].name);
            button.setAttribute('data-url', response._embedded.events[j].url);

            // var button = document.createElement('button');
            // button.setAttribute('class', 'buttonID');
            // button.textContent = "Event Details";
            var img = document.createElement("img");
            img.src = (response._embedded.events[j].images[0].url);


            console.log(j)
            document.querySelector(".list").appendChild(div).parentNode.appendChild(section).appendChild(div3).appendChild(h5).parentNode.appendChild(p).parentNode.appendChild(button).parentNode.parentNode.appendChild(div2).appendChild(img)


            $('#pageHeader').text(response._embedded.events[work].name);
            $('#date').text(moment(response._embedded.events[work].dates.start.localDate).format("MMM Do YYYY"));
            // $('#price').text("Price: $" + response._embedded.events[work].priceRanges[0].min + " to $" + response._embedded.events[work].priceRanges[0].max);
            $('#city').text(moment(response._embedded.events[work].dates.start.dateTime).format("LT"));
            $('#vlocation').text(response._embedded.events[work]._embedded.venues[0].name);

            // $(".modal-content").text(response._embedded.events[work].dates.start.localDate)
            // $(".modal-content").firstChild.text(response._embedded.events[work].priceRanges[0].min)
            // $(".modal-content").text(response._embedded.events[work].priceRanges[0].max)

        }



    })



}



// pulls pictures for start screen
function test2() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&city=New York&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        console.log(response._embedded.events[0].images[0].url);
        var imgA = document.querySelector(".large1");
        var imgB = document.querySelector(".small1");
        var imgC = document.querySelector(".small2");
        if (imgA) {
            imgA.setAttribute("src", response._embedded.events[0].images[0].url);
        }
        if (imgB) {
            imgB.setAttribute("src", response._embedded.events[6].images[0].url);
        }
        if (imgC) {
            imgC.setAttribute("src", response._embedded.events[10].images[0].url);
        }
    }
    )
};

test2();

// pulls information and creates view of sports on click of sports on navbar
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
        document.querySelector("#sport1a").firstChild.textContent = response._embedded.events[0].name;
        document.querySelector(".sport2").firstChild.setAttribute("src", response._embedded.events[2].images[0].url);
        document.querySelector("#sport2a").firstChild.textContent = response._embedded.events[2].name;
        document.querySelector(".sport3").firstChild.setAttribute("src", response._embedded.events[4].images[0].url);
        document.querySelector("#sport3a").firstChild.textContent = response._embedded.events[4].name;
        document.querySelector(".sport4").firstChild.setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector("#sport4a").firstChild.textContent = response._embedded.events[6].name;
        document.querySelector(".sport5").firstChild.setAttribute("src", response._embedded.events[8].images[0].url);
        document.querySelector("#sport5a").firstChild.textContent = response._embedded.events[8].name;
        document.querySelector(".sport6").firstChild.setAttribute("src", response._embedded.events[10].images[0].url);
        document.querySelector("#sport6a").firstChild.textContent = response._embedded.events[10].name;
    }
    )
};


// pulls information and creates view of concertss on click of concerts on navbar
function test4() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?&city=New York&segmentName=Music&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);

        document.querySelector(".concert1").firstChild.setAttribute("src", response._embedded.events[0].images[0].url);
        document.querySelector("#concert1a").firstChild.textContent = response._embedded.events[0].name;
        document.querySelector(".concert2").firstChild.setAttribute("src", response._embedded.events[2].images[0].url);
        document.querySelector("#concert2a").firstChild.textContent = response._embedded.events[2].name;
        document.querySelector(".concert3").firstChild.setAttribute("src", response._embedded.events[4].images[0].url);
        document.querySelector("#concert3a").firstChild.textContent = response._embedded.events[4].name;
        document.querySelector(".concert4").firstChild.setAttribute("src", response._embedded.events[6].images[0].url);
        document.querySelector("#concert4a").firstChild.textContent = response._embedded.events[6].name;
        document.querySelector(".concert5").firstChild.setAttribute("src", response._embedded.events[8].images[0].url);
        document.querySelector("#concert5a").firstChild.textContent = response._embedded.events[8].name;
        document.querySelector(".concert6").firstChild.setAttribute("src", response._embedded.events[10].images[0].url);
        document.querySelector("#concert6a").firstChild.textContent = response._embedded.events[10].name;


    }



    )
}

// set up some vars
var startScreenContainer = document.querySelector(".startscreen");
var sportsContainer = document.querySelector(".sports");
var sportButton = document.querySelector("#sportButton");
var concertButton = document.querySelector("#concertButton");
var concertContainer = document.querySelector(".concerts");
var input = document.querySelector("#newCity");
var searchListContainer = document.querySelector('.searchList')
var input2 = document.querySelector("#newKeyword");


// event listener for sport button on navbar
if (sportButton) {
    sportButton.addEventListener("click", function (event) {

        event.preventDefault();
        sportsContainer.classList.remove('hidden');
        startScreenContainer.classList.add('hidden');
        concertContainer.classList.add('hidden');
        searchListContainer.classList.add('hidden');
        test3();


    })
};
//  event listener for concert on navbar
if (concertButton) {
    concertButton.addEventListener("click", function (event) {

        event.preventDefault();
        sportsContainer.classList.add('hidden');
        concertContainer.classList.remove('hidden');
        startScreenContainer.classList.add('hidden');
        searchListContainer.classList.add('hidden');
        test4();



    })
};

// event listener for city searchbar
if (searchBtn) {
    searchBtn.addEventListener("click", function (event) {

        event.preventDefault();

        city = input.value;
        console.log(city);
        sportsContainer.classList.add('hidden');
        concertContainer.classList.add('hidden');
        startScreenContainer.classList.add('hidden');
        searchListContainer.classList.remove('hidden');
        test();

    })
};

// event listener for keyword searchbar
if (searchBtn2) {

    searchBtn2.addEventListener("click", function (event) {

        event.preventDefault();
        keyword = input2.value;

        console.log(keyword);
        sportsContainer.classList.add('hidden');
        concertContainer.classList.add('hidden');
        startScreenContainer.classList.add('hidden');
        searchListContainer.classList.remove('hidden');
        test5();

    })
};

// creates list for keyword search results
function test5() {

    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + keyword + "&apikey=db4iTGExqTBzTMvyBMO63edGOsMUS9EU";
    $.ajax({
        url: queryUrl,
        method: "GET",
        crossDomain: true,
    }).then(function (response) {
        console.log(response);
        $('.divider').remove();
        $('.section').remove();

        document.querySelector('#eventHeader').textContent = "Results for  " + keyword;
        for (var j = 0; j < 19; j++) {

            
            console.log(response);
            var div = document.createElement('div');
            div.setAttribute('class', "divider");
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            div3.setAttribute('class', "col m6")
            var section = document.createElement('section');
            section.setAttribute('class', 'section');
            var h5 = document.createElement("h5");
            h5.textContent = response._embedded.events[j].name;
            var p = document.createElement("p");
            p.textContent = moment(response._embedded.events[j].dates.start.localDate).format("MMM Do YYYY");
            p.setAttribute('id', 'eventDetails');

            var button = document.createElement('a');
            button.setAttribute('class', 'wave-effect waves-light btn modal-trigger buttonID2');
            button.setAttribute('href', "#modal1");
            button.text = "More Event Details";
            button.setAttribute('data-info', j);
            console.log("buttonclicked");

            
            button.setAttribute('data-dest', response._embedded.events[j]._embedded.venues[0].name);
            button.setAttribute('data-url', response._embedded.events[j].url);

            // var button = document.createElement('button');
            // button.setAttribute('class', 'buttonID');
            // button.textContent = "Event Details";
            var img = document.createElement("img");
            img.src = (response._embedded.events[j].images[0].url);


            console.log(j)
            document.querySelector(".list").appendChild(div).parentNode.appendChild(section).appendChild(div3).appendChild(h5).parentNode.appendChild(p).parentNode.appendChild(button).parentNode.parentNode.appendChild(div2).appendChild(img)


            $('#pageHeader').text(response._embedded.events[work].name);
            $('#date').text(moment(response._embedded.events[work].dates.start.localDate).format("MMM Do YYYY"));
            // $('#price').text("Price: $" + response._embedded.events[work].priceRanges[0].min + " to $" + response._embedded.events[work].priceRanges[0].max);
            $('#city').text(moment(response._embedded.events[work].dates.start.dateTime).format("LT"));
            $('#vlocation').text(response._embedded.events[work]._embedded.venues[0].name);

        }
    })
}





var direct = document.querySelector("#directions");

function initMap() {
    var directionsRenderer = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 35.2271, lng: -80.8431 }
    });
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('lineDirection'));

    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('start').addEventListener('keypress', function (e) {
        var Key = e.which || e.keyCode;
        if (Key === 13) {
            onChangeHandler();
        }
    });
    document.getElementById('end').addEventListener('keypress', function (e) {
        var Key = e.which || e.keyCode;
        if (Key === 13) {
            onChangeHandler();
        }
    });

}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var positionA = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        console.log(positionA);
        // var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;
        directionsService.route({
            origin: positionA,
            destination: end,
            travelMode: 'DRIVING',
            // travelMode: 'TRANSIT'
        }, function (response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
            } else {
                // window.alert('Directions request failed due to ' + status);
            }
        });

    });

}

$(document).on("click", "#directions", function (event) {
    // location.href = "./index.html";
    // test();
});



var elems = document.querySelectorAll('.modal');
var instances = M.Modal.init(elems);

var directionsContainer = document.querySelector(".directions");
$(document).on("click", ".buttonID", function (event) {


    test();
    work = $(this).attr('data-info');
    console.log(work);



});

var directionsContainer = document.querySelector(".directions");
$(document).on("click", ".buttonID2", function (event) {


    test5();
    work = $(this).attr('data-info');
    console.log(work);



});



var directionButton = document.querySelector('#directionBtn')

if(directionButton){
directionButton.addEventListener("click", function (event) {

    event.preventDefault();
    console.log("clicked")
    location.href = 'directions.html';

});
}


$(document).on("click", ".buttonID", function (event) {
    console.log("click");
    event.preventDefault();

    title = $(this).attr('data-title');
    localStorage.setItem('title', title);

    // location.href = "directions.html"

    destination = $(this).attr('data-dest');
    ticketUrl = $(this).attr('data-url');
    
    localStorage.setItem('ticketUrl', ticketUrl);
    localStorage.setItem('dest', destination);
    
    

    console.log(ticketUrl);
    console.log(destination);
    console.log(title);
});

$(document).on("click", ".buttonID2", function (event) {
    console.log("click");
    event.preventDefault();

    title = $(this).attr('data-title');
    localStorage.setItem('title', title);

    // location.href = "directions.html"

    destination = $(this).attr('data-dest');
    ticketUrl = $(this).attr('data-url');
    
    localStorage.setItem('ticketUrl', ticketUrl);
    localStorage.setItem('dest', destination);
    
    

    console.log(ticketUrl);
    console.log(destination);
    console.log(title);
});

$(document).ready(function () {
    if (buyTickets) {

        $(buyTickets).on("click", function (event) {
            console.log("click");
            event.preventDefault();

            ticketUrl = localStorage.getItem("ticketUrl");
            window.location.href = ticketUrl;
            console.log(ticketUrl);

        })
    }
});
$(document).ready(function () {
    if (eventTitle) {

        $(eventTitle).on("click", function (event) {
            console.log("click");
            event.preventDefault();
            getTitle = localStorage.getItem("title");
            $(eventTitle).innerHTML = getTitle;
            console.log(getTitle);

        })
    }
});



$(document).ready(function () {
    if (getDirections) {
        $(getDirections).on('click', function (event) {
            event.preventDefault();
            var d = localStorage.getItem('dest')
            $(finalDestination).attr("value", d)

            // finalDestination.val(d)  ;
            console.log(finalDestination);
        })
    }
})