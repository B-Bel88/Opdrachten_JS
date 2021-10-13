const age= 28;
const myAge= 18;
const isFemale = true;
const driverStatus = "not";
const firstname = "john";
const totalAmount = 66; 

    if (age > 18){
        console.log('You are over 18 you may enter');
    }   
    else {
        console.log('You are to joung take a hike');
    }
    if (myAge >= 18 && myAge <= 25){

        console.log('Je krijgt 50% korting!');
    }    
    else {
        console.log('Too bad you are paying full wack my friend');
    }

    if (isFemale == true){
        console.log("Welcome to ladies night");
    }
    else {
        console.log("You got it wrong you have Dong BYE BYE");
    }

    if (driverStatus === "bob"){
        
        console.log("Thank you for taking one for the team you may drive");
    }
    else {
        console.log("You iz drunk girlfriend call an UBER!");
    }

    if (firstname === "sarah" || firstname === "bram"){
        
        console.log("Old farts get free drinks!");
    }
    else {
        console.log("Too bad no free drink for you");
    }
    
    if (totalAmount >= 25 && totalAmount < 50){
        console.log("Gratis portie BITTERBALLEN!");
    }
    if (totalAmount >= 50  && totalAmount < 100){
        console.log("YEAHHHH gratis nacho's");
    }
    if (totalAmount >= 100){
        console.log("Gratis fles champange");
    }