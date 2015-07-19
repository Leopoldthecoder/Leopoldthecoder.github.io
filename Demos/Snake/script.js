//snake存储每节蛇身的div节点，inGame标记是否正在游戏，fruit存储水果的div节点，ani用于清除动画序列，paused用于标记是否处于暂停
var snake = [], inGame = false, fruit = {}, ani, paused = false;

//让低版本IE兼容document.getElementsByClassName方法
if(!document.getElementsByClassName){ 
	document.getElementsByClassName = function(className){ 
		var children = document.getElementsByTagName('*'); 
		var elements = []; 
		for (var i = 0; i < children.length; i++){ 
			var child = children[i]; 
			var classNames = child.className.split(/\s+/g); 
			for (var j = 0; j < classNames.length; j++){ 
				if (classNames[j] == className){ 
					elements.push(child); 
					break; 
				} 
			} 
		} 
		return elements; 
	}; 
}

//遍历每个蛇身节点，将它们放置在field上
function locate() {
	for (var i = 0; i < snake.length; i++) {
		snake[i].style.left = snake[i].x * 18 + "px";
		snake[i].style.top = snake[i].y * 18 + "px";
	}
}

//随机生成水果
function genFruit() {
	var overlap = true,
	x,
	y;
	while (overlap) {
		x = Math.floor(Math.random()*31);
		y = Math.floor(Math.random()*31);
		for (var i = 0; i < snake.length; i++){
			if ((snake[i].x !== x) && (snake[i].y !== y)) {
				overlap = false;
			}
		}
	}
	fruit = document.createElement("div");
	fruit.className = "fruit";
	fruit.x = x;
	fruit.y = y;
	fruit.style.left = fruit.x * 18 + "px";
	fruit.style.top = fruit.y * 18 + "px";
	document.getElementsByClassName("field")[0].appendChild(fruit);
}

//初始化：清空snake数组、清零分数、改变start按钮样式、生成蛇头
function initField() {
	snake = [];
	document.getElementsByClassName("field")[0].innerHTML = "";
	inGame = true;
	document.getElementsByClassName("btn")[0].style.backgroundColor = "#ddd";
	document.getElementsByClassName("btn")[0].style.color = "#aaa";
	document.getElementsByClassName("btn")[0].style.cursor = "default";
	document.getElementsByTagName("p")[0].innerHTML = "0";
	var head = document.createElement("div");
	head.className = "box head";
	head.x = 16;
	head.y = 15;
	snake[0] = head;
	document.getElementsByClassName("field")[0].appendChild(head);
	locate();
	genFruit();
	startGame();
}

//使蛇向dir方向前进一格：蛇头直接前进，其余蛇身的位置等于它前面一个蛇身的位置。同时判断是否越界。
function proceed(dir) {
	var deltaX = 0,
	deltaY = 0;
	if (dir !== "") {
		switch (dir) {
			case "left":
			deltaX -= 1;
			break;
			case "up":
			deltaY -= 1;
			break;
			case "right":
			deltaX += 1;
			break;
			case "down":
			deltaY += 1;
			break;
		}
		for (var i = snake.length-1; i > 0; i--) {
			snake[i].x = snake[i-1].x;
			snake[i].y = snake[i-1].y;
		}
	}
	if ((snake[0].x + deltaX < 0) || (snake[0].x + deltaX > 31) || (snake[0].y + deltaY < 0) || (snake[0].y + deltaY > 31)) {
		processOver();
		return false;
	}
	snake[0].x += deltaX;
	snake[0].y += deltaY;
	locate();
	return true;
}

//若蛇头碰到水果，则生成一节蛇身，置于目前蛇身的最后一节处；删除水果，并生成新的水果，同时计分
function checkFruit() {
	if ((snake[0].x === fruit.x) && (snake[0].y === fruit.y)) {
		var snakeBody = document.createElement("div");
		snakeBody.className = "box";
		snakeBody.x = snake[snake.length-1].x;
		snakeBody.y = snake[snake.length-1].y;
		snake.push(snakeBody);
		document.getElementsByClassName("field")[0].appendChild(snakeBody);
		document.getElementsByClassName("field")[0].removeChild(fruit);
		locate();
		genFruit();
		addScore();
	}
}

//计分函数
function addScore() {
	var score = parseInt(document.getElementsByTagName("p")[0].innerHTML);
	score += Math.min(1000, 100 + 10 * (snake.length - 2));
	document.getElementsByTagName("p")[0].innerHTML = score;
}

//检查蛇头是否碰到蛇身
function checkCrash(){
	for (var i = 1; i < snake.length; i++) {
		if ((snake[0].x === snake[i].x) && (snake[0].y === snake[i].y)) {
			processOver();
			return true;
		}
	}
	return false;
}

//处理游戏结束相关事项：清空动画队列、蛇变色、提示game over、start按钮可按
function processOver() {
	clearInterval(ani);
	if (inGame) {
		for (var i = 0; i < snake.length; i++) {
			snake[i].style.backgroundColor = "#f50";
		}
		var span = document.createElement("span");
		span.appendChild(document.createTextNode("Game Over"));
		document.getElementsByClassName("field")[0].appendChild(span);
		clearInterval(ani);
	}
	inGame = false;
	document.getElementsByClassName("btn")[0].style.backgroundColor = "#fff8f0";
	document.getElementsByClassName("btn")[0].style.color = "#651";
	document.getElementsByClassName("btn")[0].style.cursor = "pointer";
}

//开始游戏
function startGame() {

	//keyDir[0]记录按键代表的方向，keyDir[1]记录与按键相反的方向；currentDir表示蛇需要前进的方向
	var keyDir = ["", ""],
	currentDir = "";
	document.onkeydown = function(e){
		if (inGame) {

			//兼容低版本IE
			var key = event.keyCode || e.which;
			switch (key) {

				//暂停状态下无法改变前进方向
				case 37:
				case 65:
				if (!paused) keyDir = ["left", "right"];
				break;
				case 38:
				case 87:
				if (!paused) keyDir = ["up", "down"];
				break;
				case 39:
				case 68:
				if (!paused) keyDir = ["right", "left"];
				break;
				case 40:
				case 83:
				if (!paused) keyDir = ["down", "up"];
				break;
				
				//空格键暂停，按下后清空动画队列，再次按下重新开始动画
				case 32:
				paused = !paused;
				(paused)? clearInterval(ani): ani = setInterval(accelerate, Math.max(50, 260 - 10 * snake.length));
				break;
			}
			if ((currentDir !== keyDir[0]) && (currentDir !== keyDir[1])){
				currentDir = keyDir[0];
			}
		}
	}

	//为实现随着蛇身变长速度加快，定义此函数
	var accelerate = function() {
		clearInterval(ani);
		if ((proceed(currentDir)) && (!checkCrash())) {
			checkFruit();
		}
		if (inGame) {
			ani = setInterval(accelerate, Math.max(50, 260 - 10 * snake.length));
		}
	}
	ani = setInterval(accelerate, Math.max(50, 260 - 10 * snake.length));
}

window.onload = function() {
	var btn = document.getElementsByClassName("btn")[0];
	btn.onclick = function() {
		if (!inGame) {
			initField();
		}
	}
};