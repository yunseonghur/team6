/* -Logging out- */

btnLogout.addEventListener("click", function(e) {
    var promise = firebase.auth().signOut();
    promise.then(function(){
        window.location.href='page-1.html';
    });
});

window.onload=function() {
        ShowList();
};

function ShowList() {

    firebase.auth().onAuthStateChanged(function(user){
        //console.log(user.uid);

        var dbRef = firebase.database().ref("users/"+user.uid);
         var promise = dbRef.once("value", function(snap){
            list=snap.val();
            //console.log(list);
          });
       promise.then(function(){
           //console.log(list);
          DisplayList(list);
       }

       )}

);
}

function DisplayList(list){
    console.log(list);
    
// the results for Modo
    
    console.log(list["homeLocationModo"]);
    console.log(list["time"]);

    var rateDistance = 0.3; // 30 cent/km
    var rateTimeModo = 0.15; // 15 cent/min

    var time = list["time"];

    var locationHomeModo = list["homeLocationModo"];
    var x1 = locationHomeModo[0];
    var y1 = locationHomeModo[1];
    console.log(x1);
    console.log(y1);
    var locationArriveModo = list["arriveLocationModo"];
    var x2 = locationArriveModo[0];
    var y2 = locationArriveModo[1];
    console.log(x2);
    console.log(y2);

    var xValue = Math.pow((x2-x1), 2);
    var yValue = Math.pow((y2-y1), 2);
    var dist = Math.sqrt(xValue+yValue);
    console.log(dist);

    var costModo = dist*rateDistance + time*rateTimeModo;
    console.log(costModo);
    var trimCostModo = costModo.toFixed(2);
    console.log("$"+trimCostModo);
    
    var costModo = dist*rateDistance + time*rateTimeModo;
    console.log(costModo);
    var trimCostModo = costModo.toFixed(2);
    console.log("$"+trimCostModo);
    
        var paraModo = document .createElement("p");
        document.getElementById('result-container').appendChild(paraModo);
        var nodeDisModo = document.createTextNode("Distance: " + dist.toFixed(2)+" Km |");
        var nodeModo = document.createTextNode("Price: $" + trimCostModo);
        paraModo.appendChild(nodeDisModo);
        paraModo.appendChild(nodeModo);


// the results for Evo
    
    console.log(list["homeLocationEvo"]);
    console.log(list["time"]);

    var rateTimeEvo = 0.41; // 15 cent/min

    var locationHomeEvo = list["homeLocationEvo"];
    x1 = locationHomeEvo[0];
    y1 = locationHomeEvo[1];
    console.log(x1);
    console.log(y1);
    var locationArriveEvo = list["arriveLocationEvo"];
    x2 = locationArriveEvo[0];
    y2 = locationArriveEvo[1];
    console.log(x2);
    console.log(y2);
    console.log(dist);

    var costEvo =time*rateTimeEvo;
    console.log(costEvo);
    var trimCostEvo = costEvo.toFixed(2);
    console.log("$"+trimCostEvo);
    
    

        var paraEvo = document .createElement("p");
        document.getElementById('result-container-2').appendChild(paraEvo);
         var nodeDisEvo = document.createTextNode("All mileage is included with Evo :D |");
        var nodeEvo = document.createTextNode("Price: $" + trimCostEvo);
            var nodeModo = document.createTextNode("Price: $" + trimCostModo);
        paraEvo.appendChild(nodeDisEvo);
        paraEvo.appendChild(nodeEvo);
    
}




