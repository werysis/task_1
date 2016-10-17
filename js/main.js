//тут наши блюда
	var stringsJuice = ["абрикос","ананас","апельсин"];
	var stringsMushrooms = ["лук","грибы"];
	var stringsPepper = ["перец","лук","мясо"];
	var masallObject = [];
	var buffer = [];
	var z;
	
	function checkall(){
		for(let i=0;i<arguments.length;i++){
			arguments[i].sort();
			masallObject.push(arguments[i]);
		}
	}

	checkall(stringsJuice,stringsMushrooms,stringsPepper);

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
					case 0: alert("приготовлен сок");
									parentEl = document.getElementById("juice");
									img.src = "img/juice.png"; break;
					
					case 1: alert("приготовлены жареные грибочки");
									parentEl = document.getElementById("mushrooms");
									img.src = "img/mushrooms.png"; break;
					
					
					case 2: alert("приготовлен фаршированный перец");
									parentEl = document.getElementById("pepper");
									img.src = "img/pepper.png"; break;
				}
				parentEl.appendChild(img);
				return buf;
			}
		}
		buf =[];
	}

	function onDrag(event){
		event.dataTransfer.setData('image_name', event.target.alt);
		event.dataTransfer.setData('draggable_id', event.target.id);
	}
	
	function onDrop(event){
		alert("вы добавили " + event.dataTransfer.getData('image_name'));
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
	document.getElementById('clearTable').onclick = function() {
		buffer=[];
		for(let i=1;i<(this.parentElement.children.length-2);i++){
			this.parentElement.children[i].innerHTML ="";
		}
	}
// кнопка очистки плиты
	document.getElementById('clearCook').onclick = function() {
		buffer=[];
	}
	var objeref = document.querySelectorAll(".objects");
	
	function ondrag(mas1){
		for(let i=0;i<mas1.length;i++){
			mas1[i].firstElementChild.setAttribute('ondragstart',"onDrag(event)");
		}
	}
	var objetarget = document.getElementById("dropTarget");
	function ondrop_atr(mas1){
			mas1.setAttribute('ondrop',"onDrop(event)");
			mas1.setAttribute('ondragover',"cancel(event)");
			mas1.setAttribute('ondragenter',"cancel(event)");
	}
	ondrag(objeref);
	ondrop_atr(objetarget);
