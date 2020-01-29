let ReachThewater = false;
let NofLives =3;

class player
{
    constructor()
    {   
        this.sprite = 'images/char-boy.png';
        this.ResetGame();
        ReachThewater = false;
    }

    
    update()
    {

    }

    
    render()
    {
        ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100); 
    }

    //when the Collision happens between the player and the enemy 
    //we need to start over
     ResetGame()
     {  
         setTimeout(this.ResetGame, 10000);
         ReachThewater = false;
         this.x=250;
         this.y=500;
     }

   
// to check if collision occurs
 checkCollisions()
{
allEnemies.forEach(bug => {
    if(Math.abs(bug.x - this.x) < 50 && Math.abs(bug.y - this.y) < 50 )
     {
         this.Collision();
         
     }
});

}

     // when the collision happens 
     // the game the player will return into place 
     //and the game statr again
     // the player have 3 lives and the function NumberOfLives will update it
     Collision()
     {
        this.ResetGame();
        this.NumberOfLives();
     }



    // to calculate number of lives 
    // the player will have 3 lives
    //each time the player collision, the lives will decrease by 1
    //if lives = 0 , alert will apper
    NumberOfLives()
    {
             NofLives = NofLives -1 ;

             if (NofLives >= 1 && NofLives <=3 )
                 {
                    this.ResetGame();
                 }

             else 
                 {
                   alert("You Collision  3 times \n Game Ends");
                  // to stop the Game
                   game = setTimeout(gameLoop, 1000 / 30);
                 }

    }

    // to check if the player rech th water side
    ReachWater()
    {
    if ( this.x > 0     && 
         this.x <= 750  && 
         this.y > 50    && 
         this.y < 100    )
        {
            setTimeout(()=>{
                alert("Awesome, You Win! \n Play it again!")
            },1000);
     if ( ReachThewater === false)
     {
     NofLives = NofLives +1;
     }
     ReachThewater = true;
     setTimeout(()=>{
        this.ResetGame()
    },1000);
        } 
}


    // Player can not move off screen
    handleInput(direction)
    { 
        switch (direction)
        {
            case "right":
                if( this.x <= 400)
                {
                this.x += 100;
                this.ReachWater();
                }
                break;

            case "left":
                if( this.x > 50 )
                {
                this.x -= 100;
                this.ReachWater();
                }
                break;

            case "up":
                if( this.y > 100 ) 
                {
                this.y -= 82;
                this.ReachWater();
                }
                break;

            case "down":
                if ( this.y < 500 )
                {
                this.y += 82;
                this.ReachWater();
                }
                break;
               

             default:
                 break;
        }   
    }

 }



 player = new player;

