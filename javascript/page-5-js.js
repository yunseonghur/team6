/* -Log out button- */

btnLogout.addEventListener("click", function(e) {
    var promise = firebase.auth().signOut();
    promise.then(function(){
        window.location.href='../page-1.html';
    });
});

window.onload=function() {
        ShowList();
};

function ShowList() {

    firebase.auth().onAuthStateChanged(function(user){

        var dbRef = firebase.database().ref("users/"+user.uid);
        var promise = dbRef.once("value", function(snap){
            list=snap.val();
          });
        
       promise.then(function(){
          DisplayList(list);
       }
       )}
);
}

// Calculates carbon saving
function DisplayList(list){
    console.log(list);
    console.log(list["homeLocationModo"]);
    console.log(list["time"]);

    var time = list["time"];
    var locationHomeModo = list["homeLocationModo"];
    var x1 = locationHomeModo[0];
    var y1 = locationHomeModo[1];
    var locationArriveModo = list["arriveLocationModo"];
    var x2 = locationArriveModo[0];
    var y2 = locationArriveModo[1];

    var xValue = Math.pow((x2-x1), 2);
    var yValue = Math.pow((y2-y1), 2);
    var dist = Math.sqrt(xValue+yValue);
    console.log(dist);
    
    let regular = dist*211;
    let hybrid = dist*142;
    let reducedCarbon = regular-hybrid; 
    console.log(reducedCarbon);
    
        var para = document .createElement("p");
        document.getElementById('result-container').appendChild(para);
        var nodeCarbon = document.createTextNode("Your trip saved " + reducedCarbon.toFixed(2)+" grams of CO2");
        para.appendChild(nodeCarbon);
}




