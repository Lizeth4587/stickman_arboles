function ArbolOrd(){
    var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	context.fillStyle="white";
	context.fillRect(0,0,500,500);


	//Declaración, Creación e Inicialización de un arreglo
	var arregloArboles = new Array(
			new Arbol("green", 80, 50, 20, 50, 5, 1),
			new Arbol("green", 80, 60, 102, 50, 5, 1),
			new Arbol("green", 80, 70, 200, 50, 5, 1),
			new Arbol("green", 80, 80, 310, 50, 5, 1)
		);
	for (var i = arregloArboles.length - 1; i >= 0; i--) {
		arregloArboles[i].DibujarOrdenado(context);
	}
		
}


