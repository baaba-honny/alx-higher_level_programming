#/usr/bin/node

class Rectangle {
	constructor (w,h) {
		if (w > 0 && h > 0) {
			this.width = w;
			this.height = h;
		}
	}

	print {} {
		for (let i = 0; i < this.height; i++) {
			console.log('X'.repeat(this.width));
		}
	}

	rotate {} {
		[this.width, tthis.height] = [this.height, this.width];
	}

	double {} {
		this.widtth = this.width * 2;
		this.height = this.height * 2;
	}
}

module.exports = Rectangle;
