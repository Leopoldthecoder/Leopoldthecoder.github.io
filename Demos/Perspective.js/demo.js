var imgs = ['http://7xiryd.com1.z0.glb.clouddn.com/perspective_universe-background.jpg', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_planet_1.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_planet_2.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_1.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_2.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_3.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_4.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_5.png', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_wood.jpg', 'http://7xiryd.com1.z0.glb.clouddn.com/perspective_sky.jpg'];
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
    cssArr2 = [["backgroundImage", "url('http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_1.png')", "url('http://7xiryd.com1.z0.glb.clouddn.com/perspective_cube_5.png')"]],
    cssArr3 = [[], ["opacity", "0", "0.9", "transform", "translateY(0px)", "-50"]],
    cssArr4 = [["width", "100px", "200", "backgroundColor", "#fd0", "#0f0"]],
    cssArr5 = [["transform", "rotateX(0deg)", "288"]],
    cssArr6 = [];
    perspective.scroll(cssArr1, cssArr2, cssArr3, cssArr4, cssArr5, cssArr6, [0, 0.5, 2, 3, 0.5, 0]);
    perspective.hover();
}