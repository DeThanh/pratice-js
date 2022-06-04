"use strict";
function show(){
    var min= document.getElementById("name").value;
    var max= document.getElementById("name1").value;
    var compare=Math.floor(Math.random()*(max-min+10)+min);
    document.getElementById('demo').innerHTML=min^max;
}

function showdate(){
    let person={firstname:"Trần",middle_name:"Thanh",last_name:"Khoa"};
    document.getElementById("button").innerHTML=(person.middle_name+" "+person.last_name).lastIndexOf("Khoa");
}


    let firstname=document.getElementById("name");
    let lastname=document.getElementById("name1");
     let request="./info.json";
    fetch(request).then(function(info){
        return info.json();
    }).then(function(obj){
        for(var i=0;i<=Object.keys(obk.Students).length;++i){
            if(firstname==obj.Students[i].firstName&&lastname==obj.Students[i].lastName) document.getElementById("demo").innerHTML="correct!";
            else document.getElementById("demo").innerHTML="wrong!";
        }
            // console.log(Object.keys(obj.Students).length-1+"\n");
            // console.log(obj.Students[2].firstName+" "+ obj.Students[2].lastName);
    });

             