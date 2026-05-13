//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getArea(){
		return this.height*this.width;
	}
}

class Square extends Animal {
	constructor(height,width,side){
		super(height,width);
		this.side=side;
	}
	getPerimeter(){
		return 4*side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
