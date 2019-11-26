let functionBlock = document.getElementById("maindiv");
functionBlock.hidden = true;
let tableBorder = document.createElement("div");
let inputTableBorder = document.createElement("input");
let selectTableBorder = document.createElement("select");
	let optionNone = document.createElement("option");
	optionNone.value = "none";
	optionNone.innerHTML = "нет"
	selectTableBorder.appendChild(optionNone);
	let optionDotted = document.createElement("option");
	optionDotted.value = "dotted";
	optionDotted.innerHTML = "Точечная"
	selectTableBorder.appendChild(optionDotted);
	let optionDashed = document.createElement("option");
	optionDashed.value = "dashed";
	optionDashed.innerHTML = "Пунктирная"
	selectTableBorder.appendChild(optionDashed);
	let optionSolid = document.createElement("option");
	optionSolid.value = "solid";
	optionSolid.innerHTML = "Сплошная"
	selectTableBorder.appendChild(optionSolid);
	let optionDouble = document.createElement("option");
	optionDouble.value = "double";
	optionDouble.innerHTML = "Двойная"
	selectTableBorder.appendChild(optionDouble);
let buttonTableBorder = document.createElement("button");
inputTableBorder.maxLength = 3;
inputTableBorder.size = 16;
buttonTableBorder.innerHTML = "Ввести " + inputTableBorder.value + "px и граница - " + selectTableBorder.value;
inputTableBorder.oninput = () => buttonTableBorder.innerHTML = "Ввести " + inputTableBorder.value + "px и граница - " + selectTableBorder.value;
selectTableBorder.onchange = () => buttonTableBorder.innerHTML = "Ввести " + inputTableBorder.value + "px и граница - " + selectTableBorder.value;
buttonTableBorder.onclick = () => createTable.tableBorder(inputTableBorder.value, selectTableBorder.options[selectTableBorder.selectedIndex].value);
tableBorder.appendChild(inputTableBorder);
tableBorder.appendChild(selectTableBorder);
tableBorder.appendChild(buttonTableBorder);
functionBlock.appendChild(tableBorder);

let addTableName = document.createElement("div");
let inputAddTableName = document.createElement("input");
let buttonAddTableName = document.createElement("button");
buttonAddTableName.innerHTML = "Добавить название таблицы";
buttonAddTableName.onclick = () => createTable.addTableName(inputAddTableName.value);
addTableName.appendChild(inputAddTableName);
addTableName.appendChild(buttonAddTableName);
functionBlock.appendChild(addTableName);

let deleteRow = document.createElement("div");
let inputDeleteRow = document.createElement("input");
let buttonDeleteRow = document.createElement("button");
buttonDeleteRow.innerHTML = "Удалить строку";
buttonDeleteRow.onclick = () => createTable.deleteRow(inputDeleteRow.value);
deleteRow.appendChild(inputDeleteRow);
deleteRow.appendChild(buttonDeleteRow);
functionBlock.appendChild(deleteRow);

let magic = document.createElement("div");
let buttonMagic = document.createElement("button");
buttonMagic.innerHTML = "Рандом";
buttonMagic.id = "mage";
buttonMagic.onclick = () => {
	cells = document.getElementsByTagName("td");
	ind = Math.floor(Math.random() * cells.length);
	cells[ind].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"; 
	cells[ind].style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"; 
	let font = Math.floor(Math.random() * 13 + 15);
	if (font > 25) {
		cells[ind].innerHTML = null;
		let form = document.createElement("form")
  		let txtarea = document.createElement("textarea");
  		let but = document.createElement("button");
  		but.innerHTML = "Сохранить";
  		but.type = "button";
  		but.onclick = () => {
  			let txtval = txtarea.value;
  			form.hidden = true;
  			cells[ind].innerHTML = txtval;
  		}
  		cells[ind].appendChild(form);
  		form.appendChild(txtarea);
  		form.appendChild(but);
	} else {
		cells[ind].style.fontSize = font + "px";
	}
}
magic.appendChild(buttonMagic);
functionBlock.appendChild(magic);

let deleteTable = document.createElement("div");
let buttonDeleteTable = document.createElement("button");
buttonDeleteTable.innerHTML = "Стереть всё";
buttonDeleteTable.id = "deleteButton"
buttonDeleteTable.onclick = () => createTable.deleteTable();
deleteTable.appendChild(buttonDeleteTable);
functionBlock.appendChild(deleteTable);
function createTable(functionBlock) {
	functionBlock.hidden = false;

	function tableBorder(inp, sel) {
		tbl.style.border = inp + "px " + sel + " black";
	}
	createTable.tableBorder = tableBorder;

	function addTableName(inp) {
		tableName.innerHTML = inp;
	}
	createTable.addTableName = addTableName;

	function deleteRow(inp) {
		if ((!Number.isInteger(+inp)) || (+inp>tbl.rows.length) || (+inp<=0)) {
			alert("Некорректное значение");
		}
		else {
			tbl.deleteRow(inp - 1);
		}
	}
	createTable.deleteRow = deleteRow;

	function deleteTable() {
		tbl.remove();
		functionBlock.hidden = true;
		document.getElementById("MainForm").hidden = false;
	}
	createTable.deleteTable = deleteTable;

	tableWidth = document.getElementById("width").value;
	tableHeight = document.getElementById("height").value;
	document.getElementById("MainForm").hidden = true;
	let tbl = document.createElement("table");
  	tbl.border = 1;
  	for (i = 0; i < tableHeight; i++) {
  		let tr = tbl.insertRow(i);
  		for (j = 0; j < tableWidth; j++) {
  			let td = tr.insertCell(j);
  			let form = document.createElement("form")
  			let txtarea = document.createElement("textarea");
  			let but = document.createElement("button");
  			but.innerHTML = "Сохранить";
  			but.type = "button";
  			but.onclick = () => {
  				let txtval = txtarea.value;
  				form.hidden = true;
  				td.innerHTML = txtval;
  			}
  			td.appendChild(form);
  			form.appendChild(txtarea);
  			form.appendChild(but);
  		}
  	}
  	let tableName = document.createElement("caption");
	tbl.appendChild(tableName);
  	document.body.appendChild(tbl);
}