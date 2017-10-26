function Candidate(config){

	var self = this;
	Draggable.call(self, config);

	// Passed properties
	self.id = config.id;
	self.size = 60;

	// GRAPHICS
	var _graphics = Candidate.graphics[self.id];
	self.fill = _graphics.fill;
	self.img = new Image();
	self.img.src = _graphics.img;

	self.draw = function(ctx){

		// RETINA
		var x = self.x*2;
		var y = self.y*2;
		var size = self.size*2;

		// Draw image instead!
		ctx.drawImage(self.img, x-size/2, y-size/2, size, size);

	};

}

// CONSTANTS: the GRAPHICS!
// id => img & fill
Candidate.graphics = {
	square: {
		img: "img/square.png",
		fill: "rgb(109,199,248)"
	},
	triangle: {
		img: "img/triangle.png",
		fill: "rgb(123,241,44)"
	},
	hexagon: {
		img: "img/hexagon.png",
		fill: "hsl(0,80%,70%)"
	},
	pentagon: {
		img: "img/pentagon.png",
		fill: "hsl(90,80%,70%)"
	},
	bob: {
		img: "img/bob.png",
		fill: "hsl(30,80%,70%)"
	}
};