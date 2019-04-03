/* -Logging out- */

btnLogout.addEventListener("click", function(e) {
    var promise = firebase.auth().signOut();
    promise.then(function(){
        window.location.href='page-1.html';
    });
});

/*--- hilighting clicked buttons. ---*/

  // Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Get the container element
var btnContainer2 = document.getElementById("myDIV2");

// Get all buttons with class="btn" inside the container
var btns2 = btnContainer2.getElementsByClassName("button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.className += " active2";
  });
}

// Get the container element
var btnContainer3 = document.getElementById("myDIV3");

// Get all buttons with class="btn" inside the container
var btns3 = btnContainer3.getElementsByClassName("button");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active3");
    current[0].className = current[0].className.replace(" active3", "");
    this.className += " active3";
  });
}


/*--- initial data set after login ---*/

firebase.auth().onAuthStateChanged(function(user){
    firebase.database().ref("users/"+user.uid).update(
    {
    "name":user.displayName, 
    "email":user.email,
    "homeLocationEvo" : 0,
    "homeLocationModo" : 0,
    "arriveLocationEvo" : 0,
    "arriveLocationModo" : 0,
    "distanceEvo" : 0,
    "distanceModo" : 0,
    "costEvo" : 0,
    "costModo" : 0,
    "time" : 0

    });
});

//--------------** Departing Locations ** ---------------------//
//clicking the BCIT button which updates homeLocation = BCIT's coordinates
        document.getElementById("btnBCIT").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "homeLocationEvo" : [17, 12],  //lot e2
                "homeLocationModo" : [18, 11]  //lot m2

            })
            console.log(user);

        });
//clicking the YVR button which updates homeLocation = YVR's coordinates
        document.getElementById("btnYVR").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "homeLocationEvo" : [0, 3], //e4
                "homeLocationModo" : [2, 1] //m4

            })
            console.log(user);

        });

//--------------** Arriving Locations ** ---------------------//
        document.getElementById("btnDowntown").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "arriveLocationEvo" : [3, 20], //e3
                "arriveLocationModo" : [0, 21] //m3

            })
            console.log(user);
        });

        document.getElementById("btnMetrotown").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "arriveLocationEvo" : [19, 6], //e1
                "arriveLocationModo" : [17, 4] //m1
            })
            console.log(user);
        });

        //--------------** time buttons ** ---------------------//
        document.getElementById("thirtymin").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "time" : 30,

            })
            console.log(user);
        });

        document.getElementById("sixtymin").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "time" : 60
            })
            console.log(user);
        });

 //--------------** update user with calculated results ** ---------------------//       
        document.getElementById("genResult").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "distanceEvo" : 99,
                "distanceModo" : 99,
                "costEvo" : 9.9,
                "costModo" : 9.9
            })
            console.log(user);
        });


/*--- getting inputed value from database (departing and arrival) ---*/


document.getElementById("genResult").addEventListener("click",
function() {
    
    var user = firebase.auth().currentUser;
    var ref = firebase.database().ref("users/" + user.uid);
    ref.on("value", function(snap) {
                console.log("some user information" + user);
                console.log(JSON.stringify(snap.val().homeLocationEvo));
                console.log(JSON.stringify(snap.val().arriveLocationEvo));
                console.log(JSON.stringify(snap.val().homeLocationModo));
                console.log(JSON.stringify(snap.val().arriveLocationModo));

        })
  
});


/*
var user = firebase.auth().currentUser;
var ref = firebase.database().ref("users/" + user.uid);
ref.on(
    "value",
    function(snap) {
        "value",
        function(snap) {
            console.log("some user information" + user);
            console.log(JSON.stringify(snap.val().name));
        }
    })
    */

 
//start and end should be character strings
  var varStart = 100; 
  var varEnd = 300;
  var distance = varEnd - varStart;
  var duration = document.getElementById("dur");

dbRef = firebase.database().ref("users/"+"A001");
dbRef.update({
    "start": varStart, //how do we link this to an actual variable?
    "end": varEnd,
    "distance": distance,
    "duration": duration
})



firebase.database().ref("users/"+"A0123/"+"recommendations");
dbRef.update({
    
})
