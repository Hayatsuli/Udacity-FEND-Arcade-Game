let allEnemies = [];

function CreatEnemies()
{
      for ( let y of [160, 240, 330])  
    {
        let x = Math.random() * 200;
        allEnemies.push(new Enemy(x,y));
    
    }
}

// This listens for key presses and sends the keys to the
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

CreatEnemies();
