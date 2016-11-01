function convertTemp(degree,tempN){

  var C= ((5/9)*(degree-32));
  var F= ((9/5 * degree+32));



  if (tempN === "c"){
       console.log ("The temp outside is " + C  + tempN);}
  else if (tempN === "f"){
       console.log ("The temp outside is " + F  + tempN);}
}

convertTemp(212,"c");
convertTemp(32,"c");
convertTemp(65,"c");
convertTemp(-40,"f");
convertTemp(0,"f");
