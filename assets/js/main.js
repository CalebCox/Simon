var compPattern = [];
var playerPattern = [];
var strict = false;
var computerChoice;
var gameOn = false;
var playerTurn = false;

$('.start').click(function() {
    startGame();
});

function startGame() {
    if (strict && !gameOn) {
        gameOn = true;
        computerChoice = Math.floor(Math.random() * 4) + 1;
        switch (computerChoice) {
            case 1:
                compPattern.push('green');
                break;
            case 2:
                compPattern.push('red');
                break;
            case 3:
                compPattern.push('yellow');
                break;
            case 4:
                compPattern.push('blue');
                break;
        }
        playerTurn = true;
        strictGame();
    } else if (!strict && !gameOn) {
        gameOn = true;
        computerChoice = Math.floor(Math.random() * 4) + 1;
        switch (computerChoice) {
            case 1:
                compPattern.push('green');
                break;
            case 2:
                compPattern.push('red');
                break;
            case 3:
                compPattern.push('yellow');
                break;
            case 4:
                compPattern.push('blue');
                break;
        }
        playerTurn = true;
        normalGame();
    }
}

function strictGame() {

}

function gameOver() {

    gameOn = false;
}

function normalGame() {
    // has issue where it lights up all comp choices at once and only removes the color from the last indexed color.
    if(playerTurn) {
        for (var i = 0; i < compPattern.length; i++) {
            var currentColor = compPattern[i];
            console.log('Current Color before addClass: ' + currentColor);
            $(".btn[data-color='" + currentColor + "']").addClass(currentColor + "-light");
            // removeClass(currentColor);
            setTimeout(function () {
                console.log('Current Color after addClass: ' + buttonColor);
                $(".btn[data-color='" + buttonColor + "']").removeClass(buttonColor + "-light");
            }, 1000);
        }

    } else {
        computerChoice = Math.floor(Math.random() * 4) + 1;
        switch (computerChoice) {
            case 1:
                compPattern.push('green');
                break;
            case 2:
                compPattern.push('red');
                break;
            case 3:
                compPattern.push('yellow');
                break;
            case 4:
                compPattern.push('blue');
                break;
        }
    }
}

// function removeClass(buttonColor) {
//     setTimeout(function () {
//         console.log('Current Color after addClass: ' + buttonColor);
//         $(".btn[data-color='" + buttonColor + "']").removeClass(buttonColor + "-light");
//     }, 1000);
// }