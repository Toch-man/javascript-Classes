//area of a rectangle 
function areaRectangle( length, breadth){
  console.log(length * breadth);
}

//density of an object
function density ( mass, volume ){
    console.log(mass / volume)
}

//calculate body mass index
function checkBodyMass( val ){
    if( val < 18.5 ){
        console.log( "user is underweight")
    }
    elseif( val >= 25 && val <= 29.5 ){
        console.log( "user is overweight")
    }
    elseif( val >=18.5 && val <= 24.9 ){
        console.log( "user is  normal")
    }
    elseif( val >= 30 ){
        console.log( "user is obessed")
    }
}

//check  for even or odd
function checkEven( num ){
    if ( num % 2 == 0 ){
        console.log( num + " is an even number")
    }
    else{
        console.log( num + " is an odd number")
    }
}