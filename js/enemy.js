
// Enemies our player must avoid
class Enemy  {
    
    constructor(x,y)
    {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;

        //velocity will be between 100 to 200
        this.velocity= 300 + (Math.random()); 
    }


    update(delta)
    {
        this.x += this.velocity * delta;
        if ( this.x > ctx.canvas.width+50 )
        {
            this.x = 0;

        }
    }
    

    render()
    {
        ctx.drawImage(Resources.get(this.sprite), this.x-50, this.y-100);
        
    }
};
