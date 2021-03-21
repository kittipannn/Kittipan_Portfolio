window.onload = pageLoad;

function pageLoad(){
	var btn = document.getElementById("start");
	btn.onclick = startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}
var checkNumberofBox = true;
function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	var startButton = document.getElementById('start');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		
		second -= 1;
		x.innerHTML = second;
		var allbox = document.querySelectorAll("#game-layer div");
		if(second > 0){
			startButton.style.display = "none";
		}
		else{
			startButton.style.display = "inline-block";
			x.innerHTML = '';
		}
		if(allbox.length == 0 && checkNumberofBox){
			alert("You Win!");
			clearInterval(timer);
			clearScreen();
			timer = null;
			startButton.style.display = "inline-block";
			x.innerHTML = '';
		}
		else if(second <= 0 && checkNumberofBox){
			alert("You Lose!")
			clearInterval(timer);
			clearScreen();
			timer = null;
			x.innerHTML = '';
		}
		if(!checkNumberofBox){
			alert("Pls! Enter Number of Box.");
			clearInterval(timer)
			timer = null;
			x.innerHTML = '';
			startButton.style.display = "inline-block";
		}



		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	let Numberbox = parseInt(numbox);
	if(numbox == ''){
		checkNumberofBox = false;
	}
	else{
		checkNumberofBox = true;
	}
	var gameLayer = document.getElementById('game-layer');
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<Numberbox;i++){
		var tempbox = document.createElement('div');
		tempbox.className = 'square';
		tempbox.id = "box"+i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (750 - 25) + "px";
		tempbox.style.top = Math.random() * (490 - 25) + "px";
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	let currentBoxInGame = document.getElementById('game-layer');
	box.onclick = function(){
		currentBoxInGame.removeChild(box)
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#game-layer div");
	var containerBox = document.getElementById;
	//delete all  div
	for (var i=0;i<allbox.length;i++){
		containerBox.removeChild(allbox[i]);
	}
}




