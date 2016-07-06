var answer = prompt("Welcome to Mairo, a text-based game. Would you like to play?").toLowerCase();
var turns = 0;
 if(answer === 'yes') {
     console.log('Turns = ' + turns);
     console.log("Type 'help' for a list of commands.");
     console.log("");
     console.log("You wake up in a abnormally huge pile of leaves. A new marking rises on your arm, spelling 'Mairo'. You have never heard of anyone named Mairo, and where you are anyway. You decide if your going to get answers, you best look around.");
     answer = prompt("Command").toLowerCase();
     console.log("");
     console.log("> " + answer + " <");
} else {
     console.log("Why not a yes? Exactly a yes...");
}
     
     switch(answer) { //this switch is the *almost* ENTIRE game //
         case 'help':
             turns = 1;
             console.log("");
             console.log("'Mairo' is a text-based game using prompt to use commands. List of commands:");
             console.log("");
             console.log("Left, right, up, down || Used to move about the world.");
             console.log("Open (object) || Used to, obviously, open things such as doors, chests, and more.")
             console.log("");
             answer = prompt("Command").toLowerCase();
             console.log("> " + answer + " <");
             break;
        case 'left':
            turns = 1;
            console.log('Turns = ' + turns);
            console.log("");
            console.log("There is nothing but trees. FOREST.");
            answer = prompt("Command").toLowerCase();
     console.log("> " + answer + " <");
           switch(answer) {
            case "help":
           turns = 2;
           console.log("Turns = " + turns);
             console.log("");
             console.log("'Mairo' is a text-based game using prompt to use commands. List of commands:");
             console.log("");
             console.log("Left, right, up, down || Used to move about the world.");
             console.log("Open (object) || Used to, obviously, open things such as doors, chests, and more.")
             console.log("");
             answer = prompt("Command").toLowerCase();
             console.log("> " + answer + " <");
             break;
           }
            break;
        case 'right':
            turns = 1;
            console.log('Turns = ' + turns);
            console.log("");
            console.log("You are in a clearing with a lockbox, labeled 'Time Capsule', and a forest to your right.");
            answer = prompt("Command").toLowerCase()
            console.log("> " + answer + " <");
            switch(answer) {
             case 'open time capsule':
              console.log("");
              turns = 2;
              console.log('Turns = ' + turns);
              console.log("You open the time capsule. In it, is a note and some coins.");
              answer = prompt("Command").toLowerCase();
              console.log("> " + answer + " <");
              switch(answer) {
               case 'read note':
               console.log("");
               turns = 3;
               console.log('Turns = ' + turns);
               console.log("The note reads in crude handwriting: Hello, to my future self. How are things? The demon still lurks around under the well, doesn't it? If it ever gets me, I'll be ready.");
               answer= prompt("Command").toLowerCase();
               console.log("> " + answer " <");
               
               break;
              }
              break;
            }
            break;
         case 'up':
            turns = 1;
            console.log('Turns = ' + turns);
            console.log("");
            console.log("You find yourself in a beach. An endless ocean is to your left, along with a door you can make ajar.");
            answer = prompt("Command").toLowerCase()
            console.log("> " + answer + " <");
            break;
            case 'down':
             turns = 1;
             console.log('Turns = ' + turns);
             console.log("");
             console.log("You only see tree after tree after tree. FOREST.");
             answer = prompt("Command").toLowerCase()
             console.log("> " + answer + " <")
             break;
        default:
        turns = 1;
        console.log('Turns = ' + turns);
        console.log("I don't know that command. Type 'help' for a list of commands.");
        console.log("");
        answer = prompt("Command").toLowerCase();
     console.log("> " + answer + " <");
        break;

} 
