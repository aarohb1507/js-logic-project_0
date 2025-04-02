const input = require('prompt-sync')();
const name = input("What is your name? ");

console.log("Hello",name,"welcome to the game!!");
const shouldWePlay = input("Do you want to play? ");


if(shouldWePlay.toLowerCase() === "yes" ){
  const leftOrRight = input("You enter the maze. Left or Right? ");
  if(leftOrRight.toLowerCase() === "left"){
    console.log("You go left and see a bridge.. ");
    const cross = input("Do you want to cross the bridge? ");
    if(cross.toLowerCase() === "yes"){
      console.log("Oops!!! You failed, the bridge was weak! ");    
    }else if(cross.toLowerCase() === "no"){
      console.log("Congrats!! You Win!");
    }
  }else if(leftOrRight.toLowerCase() === "right"){
    const inn = input("No bridge, you still in? ;D");
    if(inn.toLowerCase() == "yes"){
      console.log("You're a fool! XD ");
    }else if(inn.toLowerCase() == "no"){
      console.log("Bravo");
    }else{
      console.log("Enter a valid answer!");
    }
  }else{
    console.log("Enter a valid answer!");
  }

}else if(shouldWePlay.toLowerCase() === "no" ){
  console.log("Okay we won't play")
}else{
  console.log("Error!");
}