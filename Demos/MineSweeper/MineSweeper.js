var t;

//计时函数
function startTimer() {
	var time = parseFloat( document.getElementById( "timeElapsed" ).innerHTML );
	time = time + 0.1;
	document.getElementById( "timeElapsed" ).innerHTML = time.toFixed( 1 );
	t = setTimeout( "startTimer()", 100 );
}


function newGame() {

	//cell对象的构造函数
	function cell( i ) {
		this.isMine = false; //记录此格是否为雷
		this.setText = setText; //方法，在格中写入文字
		this.neighborMineCount = 0; //记录周围格子中包含的雷数
		this.expanded = false; //表示此格是否执行过expand操作，详expandField函数
		this.exposed = false; //表示此格是否已点开
		this.marked = false; //表示此格是否被玩家标记为雷
		this.neighborIndex = [ -10, -9, -8, -1, 0, 1, 8, 9, 10]; //记录周围格子的编号与本格编号之差
		this.target = document.getElementById( i.toString() ).childNodes[ 0 ]; //指向第i个格子
		function setText( text ) {
			this.target.innerHTML = text;
		}
	}

	//以第i格为中心，点开包括其在内的9个格子
	function expandField( i ) {
		cells[ i ].expanded = true; //cell对象的expand属性表示是否以本格为中心运行过expandField函数。用来控制递归
		cells[ i ].exposed = true;
		for  ( var j = 0; j < 9; j++ ) {
			var currentIndex = i + cells[ i ].neighborIndex[ j ];
			if ( ( cells[ currentIndex ].target.style.display !== "block" ) && ( !cells[ currentIndex ].isMine ) && ( !cells[ currentIndex].marked ) ) {
				cells[ currentIndex ].target.style.display = "block";
				cells[ currentIndex ].target.parentNode.style.backgroundColor = "white";
				cells[ currentIndex ].exposed = true;
			}
			if ( ( cells[ currentIndex ].target.innerHTML === "" ) && ( !cells[ currentIndex ].expanded ) && ( !cells[ currentIndex].marked ) ) {
				expandField( currentIndex ); //递归，点开格子直到遇到数字（即周围有雷的格子）
			}
		}
	}

	//检查第i格周围实际的雷数与目前其周围被标记为雷的个数是否相等
	function checkMatch( i ) {
		var neighborMineMark = 0;
		for ( var j = 0; j < 9; j++ ) {
			var currentIndex = i + cells[ i ].neighborIndex[ j ];
			if ( cells[ currentIndex ].marked === true ) {
				neighborMineMark++;
			}
		}
		if ( cells[ i ].neighborMineCount === neighborMineMark ) {
			return true;
		}
		else {
			return false;
		}
	}

	//游戏胜利
	function callJudge() {
		var exposedCount = 0; //记录已点开的格子数
		for ( var i = 0; i < 81; i++ ) {
			if ( cells[ i ].exposed === true) {
				exposedCount++;
			}
		}
		if ( exposedCount === 71) { //若所有非雷格均已点开，则游戏胜利
			for ( i = 0; i < 81; i++ ){
				if ( cells[ i ].isMine ) {
					cells[ i ].target.style.display = "block";
					cells[ i ].target.parentNode.style.backgroundColor = "green";
				}
			}
			document.getElementById( "minesLeft" ).innerHTML =  "0";
			alert( "Good Job!" );
			initiateField();
			newGame();
		}
	}

	//游戏胜利或失败后初始化雷区
	function initiateField() {
		for ( var i = 0; i < 81; i++ ) {
				cells[ i ].target.style.display = "none";
				cells[ i ].target.parentNode.style.backgroundColor = "#f0f0f0";
				cells[ i ].setText( "" );
			}
		delete cells;
		document.getElementById( "minesLeft" ).innerHTML =  "10";
	}

	//将每格定义为cell对象
	var cells = new Array( 81 );
	for ( var i = 0; i < 81; i++ ) {
		cells[ i ] = new cell( i ); //每一格均为cell对象
		if ( i < 9 ) { //针对每个格子的不同位置，对neighborIndex属性作出相应改动。此为最上行的情况
			cells[ i ].neighborIndex[ 0 ] = 0;
			cells[ i ].neighborIndex[ 1 ] = 0;
			cells[ i ].neighborIndex[ 2 ] = 0;
		}
		else if ( i > 71 ) { //此为最下行
			cells[ i ].neighborIndex[ 6 ] = 0;
			cells[ i ].neighborIndex[ 7 ] = 0;
			cells[ i ].neighborIndex[ 8 ] = 0;
		}
		if ( i % 9 === 0 ) { //此为最左列
			cells[ i ].neighborIndex[ 0 ] = 0;
			cells[ i ].neighborIndex[ 3 ] = 0;
			cells[ i ].neighborIndex[ 6 ] = 0;			
		}
		else if ( i % 9 === 8 ) { //此为最右列
			cells[ i ].neighborIndex[ 2 ] = 0;
			cells[ i ].neighborIndex[ 5 ] = 0;
			cells[ i ].neighborIndex[ 8 ] = 0;		
		}
	}

	//在雷区随机布雷
	var mineGenerateCount = 0, newMine;
	while ( mineGenerateCount < 10 ) { //mineGenerateCount记录已生成的雷数
		newMine = Math.floor( Math.random() * 81 ); //产生0～80的随机数newMine
		if ( !cells[ newMine ].isMine ) { //若第newMine格不为雷，则将其钦点为雷
			cells[ newMine ].isMine = true;
			cells[ newMine ].setText( "O" );
			mineGenerateCount++;
		}
	}

	//统计第i格周围的雷数
	var currentIndex = 0;
	for ( i = 0; i < 81; i++ ) {
		if ( !cells[ i ].isMine ) { //只需在第i格本身不是雷时统计
			for ( var j = 0; j < 9; j++ ) {
				currentIndex = i + cells[ i ].neighborIndex[ j ];
				if ( cells[ currentIndex ].isMine ) {
					cells[ i ].neighborMineCount++;
				}
			}
			if ( cells[ i ].neighborMineCount > 0 ) { //周围有雷，则在本格写入雷数
				cells[ i ].setText( cells[ i ].neighborMineCount.toString() );
			}
		}
	}

	var firstClick = true; //判断是否为本轮游戏的第一次点击，用来启动计时器
	clearTimeout( t );
	document.getElementById( "timeElapsed" ).innerHTML = "0";

	//为每一格绑定事件处理函数
	for ( i = 0; i < 81; i++ ) {
		( function( i ) {
			cells[ i ].target.parentNode.onclick = function() {

				//左键点击未打开格
				if ( ( event.button === 0 ) && ( !cells[ i ].marked ) ) {
					if ( firstClick ) { //若是第一次左击则开始计时
						firstClick = false;
						startTimer();
					}
					if ( this.childNodes[ 0 ].innerHTML === "" ) { //点到本身不是雷、周围也没有雷的格子，则开始扩展
						expandField( i );
					}
					else if ( this.childNodes[ 0 ].innerHTML !== "O" ) { //点到周围有雷的格子，则打开该格
						this.childNodes[ 0 ].style.display = "block";
						this.style.backgroundColor = "white";
						cells[ i ].expanded = true;
						cells[ i ].exposed = true;
					}
					else { //点到雷，则游戏失败
						this.childNodes[ 0 ].style.display = "block";
						this.style.backgroundColor = "red";
						for ( var j = 0; j < 81; j++ ){
							if ( cells[ j ].isMine ) {
								cells[ j ].target.style.display = "block";
							}
						}
						alert( "Game Over!" );
						initiateField();
						newGame();
					}
					callJudge(); //对于每一次点击，若未触发游戏失败条件，则检查游戏是否已经胜利
				}

				//中键点击周围有雷的格子
				else if ( event.button === 1 ) {
					if ( ( cells[ i ].exposed ) && ( this.childNodes[ 0 ].innerHTML !== "" ) && ( this.childNodes[ 0 ].innerHTML !== "O" ) ) {
						if ( checkMatch( i ) ) { //若周围实际雷数等于目前标记雷数
							for ( j = 0; j < 9; j++ ) {
								currentIndex = i + cells[ i ].neighborIndex[ j ];
								if ( ( cells[ currentIndex ].marked === true ) && ( !cells[ currentIndex ].isMine) ) { //在周围实际雷数等于目前标记雷数的前提下，若存在标记为雷的格子实际上不是雷，则游戏失败
									cells[ currentIndex ].target.parentNode.style.backgroundColor = "red";
									for ( var k = 0; k < 81; k++ ) {
										if ( cells[ k ].isMine ) {
											cells[ k ].target.style.display = "block";
										}
									}
									alert( "Game Over!" );
									initiateField();
									newGame();
									return false;
								}
							}
							expandField( i ); //若标记均正确，则以点击的格子为中心进行扩展							
						}
					callJudge(); //同样判断游戏是否已经胜利
					}
				return false; //阻止中键单击的默认行为
				}
			}

			//右键单击未打开格
			cells[ i ].target.parentNode.oncontextmenu = function() { 
				if ( cells[ i ].exposed === false ) {
					if ( cells[ i ].marked ) { //若该格已被标记为雷，则取消标记
						this.style.backgroundColor = "#f0f0f0";
						cells[ i ].marked = false;
					}
					else { //否则将该格标记为雷
						this.style.backgroundColor = "green";
						cells[ i ].marked = true;
					}
				}
				var minesMarked = 0; //记录目前整个雷区已标记雷数
				for ( var j = 0; j < 81; j++ ) {
					if ( cells[ j ].marked ) {
						minesMarked++;
					}
				}
				document.getElementById( "minesLeft" ).innerHTML =  10 - minesMarked; //每当标记数发生变化，则更新显示剩余雷数
				return false;
			}

			//中键按在已打开的、周围有雷的、已标记雷数和实际雷数不相等的格子上时，提示周围哪些格子可能为雷
			cells[ i ].target.parentNode.onmousedown = function() {
				if ( (event.button === 1 ) && ( !checkMatch( i ) ) && ( cells[ i ].exposed ) ) {
					for ( j = 0; j < 9; j++ ) {
						currentIndex = i + cells[ i ].neighborIndex[ j ];
						if ( ( !cells[ currentIndex ].exposed ) && ( !cells[ currentIndex ].marked ) ) {
							cells[ currentIndex ].target.parentNode.style.backgroundColor = "yellow";
						}
					}
				}
			}

			//中键抬起时，取消提示
			cells[ i ].target.parentNode.onmouseup = function() {
				if ( (event.button === 1 ) && ( !checkMatch( i ) ) && ( cells[ i ].exposed ) ) {
					for ( j = 0; j < 9; j++ ) {
						currentIndex = i + cells[ i ].neighborIndex[ j ];
						if ( ( !cells[ currentIndex ].exposed ) && ( !cells[ currentIndex ].marked ) ) {
							cells[ currentIndex ].target.parentNode.style.backgroundColor = "#f0f0f0";
						}
					}
				}
			}
		} )( i );
	}
}

window.onload = function() {
	var frag = document.createDocumentFragment();
	for ( var i = 0; i < 81; i++ ) { //生成雷区
		var box = document.createElement( "div" );
		box.className = "box";
		box.setAttribute( "id" , i.toString() );
		var span = document.createElement( "span" );
		span.innerHTML = "";
		box.appendChild( span );
		frag.appendChild( box );
	}
	document.getElementsByClassName("container")[0].appendChild(frag);
	newGame();
};