
/* -Logging out- */

btnLogout.addEventListener("click", function(e) {
    var promise = firebase.auth().signOut();
    promise.then(function(){
        window.location.href='page-1.html';
    });
});

/*--- initial data set after login ---*/

firebase.auth().onAuthStateChanged(function(user){
    firebase.database().ref("users/"+user.uid).update(
    {
    "name":user.displayName, 
    "email":user.email,
    "homeLocationEvo" : 0,
    "homeLocationModo" : 0,
    "arriveLocationEvo" : 0,
    "arriveLocationModo" : 0

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
