let form = document.forms["multi-form"];
console.log(form);
form.onsubmit = function(e){
  e.preventDefault();
  //id-inner diameter
let id = document.querySelector("#innerDiameter").value;
console.log(id);
//od-outter height
let od = document.querySelector("#outterDiameter").value;
let odBy2 = od/2;
let tapperHeight = document.querySelector("#tapperHeight").value;

let idBy2 = id/2;
let odMinusIdBy2 = (od/2) - (id/2);
console.log(odMinusIdBy2 , "odMinusIdBy2");

let convertToDegree = 180/Math.PI;
//
let slopeOfFustrumInRadians  = Math.acos(odMinusIdBy2 / tapperHeight);
console.log(slopeOfFustrumInRadians , "slopeOfFustrumInRadians");

let slopeOfFustrumInDegree = Math.acos(odMinusIdBy2 / tapperHeight) * convertToDegree;
console.log(slopeOfFustrumInDegree,"slopeOfFustrumInDegree");

let cos = Math.cos(odMinusIdBy2/tapperHeight);
console.log(Math.acos(cos),"cos"); 

//let bigRadius  = slopeOfFustrumInRadians/ (Math.cos(slopeOfFustrumInDegree) / 2) ;
let bigRadius = odBy2/Math.acos(cos);
console.log(bigRadius,"bigRadius");
document.querySelector(".big-radius").innerHTML = bigRadius

let smallRadius = bigRadius - tapperHeight;
console.log(smallRadius,"smallRadius");
document.querySelector(".small-radius").innerHTML = smallRadius

let degreeOfCone  = (odBy2 * 360) / bigRadius;
console.log(degreeOfCone , "degreeOfCone");
document.querySelector(".degree-of-cone").innerHTML = degreeOfCone




let outterCircumference = od * Math.PI;
let check1 = (degreeOfCone / 360)*2*Math.PI * bigRadius;
console.log(check1, "check1"); 

let innerCircumference = id * Math.PI;
let check2 = (degreeOfCone / 360) * 2 * Math.PI * smallRadius;
console.log(check2,"check2"); 


}