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
    console.log(list["homeLocationModo"]);
    console.log(list["time"]);

    var rateDistance = 0.3;
    var perMin = 0.15;
    var perHour = 9;

    var timeMin = list["time"];
    var timeHour = list["time"]/60

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

    var costPerMin = dist*rateDistance + timeMin*perMin;
    console.log(costPerMin);
    var trimCostPerMin = costPerMin.toFixed(2);
    console.log("$"+trimCostPerMin);

    var costPerHour = dist*rateDistance + timeHour*perHour;
    console.log(costPerHour);
    var trimCostPerHour = costPerHour.toFixed(2);
    console.log("$"+trimCostPerHour);
    

        var cost1=100;

        var para = document .createElement("p");
        document.getElementById('result-container').appendChild(para);
        var node = document.createTextNode("Cost (minute rate, hour rate) for modo is $" + trimCostPerMin
                                                + ", $" +  trimCostPerHour);
        para.appendChild(node);
        var node2 = document.createTextNode("Note: Modo does not calculate based on minutes.");
        para.appendChild(node2);
    
}




