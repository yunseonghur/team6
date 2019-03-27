
/* -Logging out- */

btnLogout.addEventListener("click", function(e) {
    var promise = firebase.auth().signOut();
    promise.then(function(){
        window.location.href='page-1.html';
    });
});

/*-----*/


firebase.auth().onAuthStateChanged(function(user){
    firebase.database().ref("users/"+user.uid).update(
    {
    "name":user.displayName, 
    "email":user.email,
    "homeLocation": 123
    });
});

        document.getElementById("btnBCIT").addEventListener("click",
        function() {
            var user = firebase.auth().currentUser;
            firebase.database().ref("users/"+user.uid).update({
                "homeLocation": [0, 0]
            })
            console.log(user);

        });

        document.getElementById("btnDowntown").addEventListener("click",
        function() {
            console.log("going to downtown");
        });

        document.getElementById("btnMetrotown").addEventListener("click",
        function() {
            console.log("going to metrotown");
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
