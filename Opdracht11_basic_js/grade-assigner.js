function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
}
for (let s = 60; s <70; s++){
        console.log(`For scoring ${s} points, you get an D`);
    }
    for (let s = 70; s <80; s++){
        console.log(`For scoring ${s} points, you get an C`);
    }
            for (let s = 80; s <90; s++){
             console.log(`For scoring ${s} points, you get an B`);
    }    
                for (let s = 90; s <=100; s++){
                    console.log(`For scoring ${s} points, you get an A`);
    }
