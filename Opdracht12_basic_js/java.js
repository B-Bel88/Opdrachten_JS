
const colors = ['yellow', 'red', 'blue', 'Orange'];



let x = 0;
while (x < colors.length){
    console.log(colors[x]);
    x++;
}

for (let x = 0; x <colors.length; x++){
    console.log(colors[x]);
  
}
colors.forEach(Element => console.log(Element));

/*  nr1: een for loop neemt 2 regel in beslag - een while loop neemt 4 regels in beslag
    nr2: for each neemt 1 regel in beslag
    nr3: ik vind foreach lekker kort maar ik vind de for loop het makkelijkste om te gebruiken
    nr4:?
         */
    