var imgs = ['images/universe-background.jpg', 'images/planet_1.png', 'images/planet_2.png', 'images/cube_1.png', 'images/cube_2.png', 'images/cube_3.png', 'images/cube_4.png', 'images/cube_5.png', 'images/wood.jpg'];
var imgs_onload = function() {
    imgs.pop();
    if(imgs.length === 0) {
        start();
    }
}
for (s in imgs) {
    var img = new Image;
    img.onload = imgs_onload;
    img.src = imgs[s];
}

function start() {
    var cssArr1 = [["transform", "translateY(0px)", "-100"], ["transform", "translateY(0px)", "-180"], ["transform", "translateY(0px)", "-700"]],
    cssArr2 = [["backgroundImage", "url('images/cube_1.png')", "5"]],
    cssArr3 = [[], ["opacity", "0", "0.9", "transform", "translateY(0px)", "-50"]],
    cssArr4 = [["width", "100px", "200", "backgroundColor", "#fd0", "#0f0"]],
    cssArr5 = [["transform", "rotateX(0deg)", "288"]],
    cssArr6 = [];
    perspective.scroll(cssArr1, cssArr2, cssArr3, cssArr4, cssArr5, cssArr6, [0, 0.5, 2, 5, 0.5, 0]);
    perspective.hover();
}