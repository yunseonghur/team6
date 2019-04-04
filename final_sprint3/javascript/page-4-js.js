
window.onload=function() {
    ShowList("wWFmoaZNr3MmZVEGt627ItDLKqr2");
};

function ShowList(users) {
    var dbRef = firebase.database().ref("users/"+users);
    var promise = dbRef.once("value", function(snap){
        list=snap.val();
    });
    promise.then(function(){
        DisplayList(list);
});

}
function DisplayList(list){
    console.log(list);
    for (x in list) {
        var para = document.createElement("p");
        document.getElementById('resultContainer').appendChild(para);
        var node = document.createTextNode(x+""+list[x]);
        para.appendChild(node);
    }
}






