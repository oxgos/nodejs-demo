function move(ball, distance) {
	return new Promise(function(resolve, reject) {
		function _animate() {
			setTimeout(function() {
				let marginLeft = parseInt(ball.style.marginLeft, 10);
				if(marginLeft === distance) {
					resolve();
				}else {
					if(marginLeft < distance) {
						marginLeft++;
					}else {
						marginLeft--;
					}
					ball.style.marginLeft = marginLeft + 'px';
					_animate();
				}
			}, 13);
		}
		_animate();
	})	
}