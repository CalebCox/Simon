var game = {
    count: 0,
    strict: false,
    colors: ['green','red','yellow','blue'],
    current: [],
    player: [],
    sound: {
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }
};

$('.start').click(function () {
    if (game.strict) {
        game.strict = false;
        $('.indicator').removeClass('indicator-on');
    }
    newGame();
});

$('.strict').click(function () {
    game.strict = true;
    $('.indicator').addClass('indicator-on');
    newGame();
});

$('.btn').click(function () {
    var color = $(this).data('color');
    updatePlayerMoves(color);
});

function newGame() {
    game.count = 0;
    game.current = [];
    addCount();
}

function addCount() {
    game.count++;
    $('.value').html(game.count);
    generateColor();
}

function generateColor() {
    game.current.push(game.colors[(Math.floor(Math.random() * 4))]);
    showMoves();
}

function showMoves() {
    var i = 0;
    var moves = setInterval(function () {
        playGame(game.current[i]);
        i++;
        if (i >= game.current.length) {
            clearInterval(moves);
        }
    }, 1000);
    resetPlayer();
}

function playGame(moves) {
    $(".btn[data-color='" + moves + "']").addClass(moves + "-light");
    sound(moves);
    setTimeout(function () {
        $(".btn[data-color='" + moves + "']").removeClass(moves + "-light");
    }, 500);
}

function resetPlayer() {
    game.player = [];
}

function updatePlayerMoves(move) {
    game.player.push(move);
    playerMove(move);
}

function playerMove(color) {
    if (game.player[game.player.length - 1] !== game.current[game.player.length - 1]) {
        if(game.strict){
            alert('Try again! ...From scratch!');
            newGame();
        } else {
            alert('Wrong move! Try again!');
            showMoves();
        }
    } else {
        console.log('Good Move!');
        sound(color);
        var check = game.player.length === game.current.length;
        if (check) {
            if(game.count === 20){
                alert('You won! Congrats.');
            } else {
                alert('Next round!');
                addCount();
            }
        }
    }
}

function sound(color) {
    switch (color) {
        case 'green':
            game.sound.green.play();
            break;
        case 'red':
            game.sound.red.play();
            break;
        case 'yellow':
            game.sound.yellow.play();
            break;
        case 'blue':
            game.sound.blue.play();
            break;
    }
}