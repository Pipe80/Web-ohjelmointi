function Block(ctx,x,y) {
	this.ctx = ctx;
	this.w = 40;
	this.h = 15;
	this.x = x;
	this.y = y;
	// random color for a block
	this.color = "rgb("+Math.floor(Math.random()*256)+","+
						Math.floor(Math.random()*256)+","+
						Math.floor(Math.random()*256)+")";
	
	// draw a block
	this.draw = function() {	
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.w,this.h);
	}
	
}