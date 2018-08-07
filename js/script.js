

//BMI Calculation
var  bodyMass=function(weight,height){
  return weight/(height*height);
}
var weight=parseFloat(prompt("Enter your weight"));
var height=parseFloat(prompt("Enter your height"));
var result=bodyMass(weight,height);
alert("Your BMI is "+result);
