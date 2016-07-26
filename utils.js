var x = 'INC';
var y = 'DROP';

function processGrade (grade){
    
    if (grade < 70 ){
        console.log("There is no grade like that.");
    }
    else if (grade > 70){
        console.log("Grade is overkill");
    }
    else if (grade == x ){
        console.log("Your grade is incomplete.");
    }
    else if (grade == y ) {
        console.log("You have drop the subject.");
    }
}

module.exports = {
    processTheGrade:processGrade
}
