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
    
        var para = document .createElement("p");
        document.getElementById('result-container').appendChild(para);
        var node = document.createTextNode("Cost for Modo is $" + trimCostModo);
        para.appendChild(node);

  
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
    
    

        var para = document .createElement("p");
        document.getElementById('result-container-2').appendChild(para);
        var node = document.createTextNode("Cost for Evo is $" + trimCostEvo);
        para.appendChild(node);
    
}




