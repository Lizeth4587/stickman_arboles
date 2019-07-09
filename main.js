 function crearPersona(){
	
    var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	
	
	context.fillStyle="white";
	
	context.fillRect(0,0,500,500);

	
	var arregloPersonas; //Declaración
	arregloPersonas = new Array(5); //Creación
	for (var i = 0; i <= 5-1; i++) { //Inicialización
		
		arregloPersonas[i] = new Persona(
				"persona"+i,
				20+i,
				"red",
				100+i,50+i,
				10+(i*90),
				50
			);
	}
	
	arregloPersonas.forEach(
		function(element) {
			
	  		element.Dibujar(context);

	  	}
	);
}

	
	
    