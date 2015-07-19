function isClicked(target){
	if (target.className.indexOf("clicked")>0){
		return true;
	}
	else {
		return false;
	}
}

function endGame(){
	for (var i=0; i<9; i++){
		if (boxes[i].className.indexOf("clicked")>-1){
			boxes[i].setAttribute("class","box");
			boxes[i].childNodes[0].setAttribute("class", "");
		}
	}
	gameEnded=true;
}

function callJudge(){
	var blackPoints=new Array(8),
		whitePoints=new Array(8);
	gameEnded=false;
	for (var i=0; i<8; i++){
		blackPoints[i]=0;
		whitePoints[i]=0;
		for (var j=0; j<3; j++){
			if (phantomBoard[line[i][j]]===1){
				blackPoints[i]++;
				if (blackPoints[i]===3){//黑子占满line中某条线
					alert("You win!");//则黑胜
					endGame();
				}
			}
			if (phantomBoard[line[i][j]]===2){
				whitePoints[i]++;
				if (whitePoints[i]===3){
					alert("You lose!");
					endGame();
				}
			}
		}
	}
	if (count===9){
		alert("Draw!");
		endGame();
	}
	if (gameEnded){
		newGame();	
	}
}

function AITurn(){//采用两层遍历，计算每种情况的分数
	var maxPoint=-1000,
		minPoint=1000,
		minPointOnTrial=[-1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000],
		mark=-1;
	for (var i=0; i<9; i++){
		if (phantomBoard[i]===0){//虚拟棋盘上此处无子
			phantomBoard[i]=2;//则落下白子
			minPoint=1000;
			for (var j=0; j<9; j++){
				if (phantomBoard[j]===0){//虚拟棋盘上此处无子
					phantomBoard[j]=1;//则落下黑子
					currentPoint=getPoints();
					if (currentPoint<minPoint){
						minPoint=currentPoint;//执黑玩家的目标是使分数最小，记录本次遍历的最小分数
					}
					phantomBoard[j]=0;//将虚拟棋盘上此格的黑子移走
				}
			}
			minPointOnTrial[i]=minPoint;//白子落在第i格时，可能达到的最小分数
			phantomBoard[i]=0;//将虚拟棋盘上此格的白子移走
		}
	}
	for (i=0; i<9; i++){
		if (minPointOnTrial[i]>maxPoint){
			maxPoint=minPointOnTrial[i];//找到白子在虚拟棋盘上遍历时，可能达到的最小分数的最大值
			mark=i;//记录此时的坐标
		}
	}
	boxes[mark].className+=" clicked";
	boxes[mark].childNodes[0].setAttribute("class", "white");//操作DOM，落下白子
	phantomBoard[mark]=2;//同步更新虚拟棋盘
	count++;
	callJudge();//每次棋盘上有新子落下时，判断游戏是否结束
}

function getPoints(){//计算当前虚拟棋盘上的分数
	var blackPoints=new Array(8),//记录当前虚拟棋盘上黑子在line中的每一条线上的个数
		whitePoints=new Array(8),
		points=0;
	for (var i=0; i<8; i++){
		blackPoints[i]=0;
		whitePoints[i]=0;
		for (var j=0; j<3; j++){
			if (phantomBoard[line[i][j]]===1){
				blackPoints[i]++;//当前虚拟棋盘上此格为黑子，则个数加1
			}
			if (phantomBoard[line[i][j]]===2){
				whitePoints[i]++;
			}
		}
		points+=Math.pow(10,whitePoints[i]-1);//一条线上有0、1、2、3个白子时，分别记0.1、1、10、100分
		points-=Math.pow(10,blackPoints[i]-1);//一条线上有0、1、2、3个黑子时，分别记-0.1、-1、-10、-100分
	}
	return points;
}

function newGame(){
	phantomBoard=[0,0,0,0,0,0,0,0,0];//为减少DOM操作，创建一个虚拟棋盘，记录目前棋子状态，0：无子，1：黑子，2：白子
	count=0;//记录目前棋盘上棋子数
	boxes=document.getElementsByClassName("box");
	for (var i=0; i<9; i++){
		boxes[i].onclick=function(){
			if (!isClicked(this)){
				count++;
				this.className+=(" clicked");
				this.childNodes[0].setAttribute("class", "black");//玩家执黑
				phantomBoard[parseInt(this.childNodes[0].getAttribute("id"))]=1;//虚拟棋盘同步更新
				callJudge();//每次棋盘上有新子落下时，判断游戏是否结束
				if (!gameEnded){//未结束则进行AI回合
					AITurn();
				}
			}
		}
	}
}

window.onload=function(){
	line=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];//某方获胜时需占据的坐标，共8组
	newGame();
};