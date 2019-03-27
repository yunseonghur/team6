
document.getElementById("genResult").addEventListener("click",
function() {
    ShowList("users");
});

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
        var para = document .createElement("p");
        document.body.appendChild(para);
        var node = document.createTextNode("Your result it " + x );
        para.appendChild(node);
    }
}