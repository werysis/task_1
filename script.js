//тут наши блюда
	var stringsСocktail = ["молоко","банан","блендер"];
	var stringSsmoothies = ["молоко","банан","крупа"];
	var stringsMushrooms = ["лук","грибы"];
	var stringsSalad = ["сельдерей","морковь","баклажан"];
	var stringsСake = ["кукуруза","яйцо","крупа"];
	var stringsJuice = ["арбуз","лимон","блендер"];
	var stringsPepper = ["перец","морковь","грибы"];
	var masallObject = [];
	var buffer = [];
	var z;
//сортировка
	function checkall(){
		for(let i=0;i<arguments.length;i++){
			arguments[i].sort();
			masallObject.push(arguments[i]);
		}
	}

	checkall(stringsСocktail,stringSsmoothies,stringsMushrooms,stringsSalad,stringsСake,stringsJuice,stringsPepper);
// сверка
	function checkitem(objev){
		var buf = objev;
		buf=buf.join(' ');
		var parentEl;
		var bufformas;
		var img = document.createElement("IMG");
		for(let i=0;i<masallObject.length;i++){
			bufformas=masallObject[i].join(' ');
			if(buf===bufformas){
				switch(i){
					case 0: alert("приготовлен коктель");
									parentEl = document.getElementById("moloko");
									img.src = "image/koktel-molochnij.png"; break;
					case 1: alert("приготовлен смузи");
									parentEl = document.getElementById("cmouzi");
									img.src = "image/cmouzi.png"; break;
					case 2: alert("приготовлены жареные грибочки");
									parentEl = document.getElementById("mushrooms");
									img.src = "image/mushrooms.png"; break;
					case 3: alert("приготовлен салат");
									parentEl = document.getElementById("salad");
									img.src = "image/salad.png"; break;
					case 4: alert("приготовлена лепешка");
									parentEl = document.getElementById("cake");
									img.src = "image/cake.png"; break;
					case 5: alert("приготовлен сок");
									parentEl = document.getElementById("juice");
									img.src = "image/juice.png"; break;
					case 6: alert("приготовлен фаршированный перец");
									parentEl = document.getElementById("pepper");
									img.src = "image/pepper.png"; break;
				}
				parentEl.appendChild(img);
				return buf;
			}
		}
		buf =[];
	}
//добавляем в переменную event данные об альтернативном тексте картинки и о её id.
	function onDrag(target, event){
		event.dataTransfer.setData('image_name', target.alt);
		event.dataTransfer.setData('draggable_id', target.id);
	}
// выводим и очищаем 
	function onDrop(target, event){
		alert("вы добавили: " + event.dataTransfer.getData('image_name')+" ,на плите уже есть: " + buffer);
		buffer.push(event.dataTransfer.getData('image_name'));
		buffer.sort();
		z=checkitem(buffer);
		
		if(z){
			buffer=[];
		}
		if(buffer.length===3){
			
			buffer=[];
		}

	if (event.preventDefault) {
		event.preventDefault();
	}
	return false;

	}

	function cancel(event){
		if (event.preventDefault){
			event.preventDefault();
		}
		return false;
	}
// кнопка очистки блюд
	document.getElementById('q').onclick = function() {
		k=0,m=0,g=0,s=0,t=0,u=0,y=0;
		buffer=[];
		for(let i=1;i<(this.parentElement.parentElement.children.length-1);i++){
			this.parentElement.parentElement.children[i].innerHTML ="";
		}
	}
// кнопка очистки плиты
	document.getElementById('k').onclick = function() {
		buffer=[];
	}
///кнопка help
	function openbox(id){
		display = document.getElementById(id).style.display;
		if(display=='none'){
			document.getElementById(id).style.display='block';
		}
		else{
			document.getElementById(id).style.display='none';
		}
	}
