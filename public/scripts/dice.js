function diceRoll(){
    document.getElementById("diceResults").innerHTML = "Dice Roll: " + (Math.floor(Math.random()*(6-1+1)+1));
};

function statRolls(){
    document.getElementById("diceResultsMultiple").innerHTML = "Stat Roll: " + ((Math.floor(Math.random()*(6-1+1)+1))+(Math.floor(Math.random()*(6-1+1)+1))+(Math.floor(Math.random()*(6-1+1)+1)))
};
