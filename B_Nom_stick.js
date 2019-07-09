function burbuja(Nombre){
	for(i=0;i<(Nombre.length-1);i++)
	//recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
	for(j=0;j<(Nombre.length-i);j++){

			//comparamos
			if(Nombre[j]>Nombre[j+1]){
					 //guardamos el nombre mas alejado alfabeticamente en el auxiliar
					 aux=Nombre[j];
					 //guardamos el nombre menor en el lugar correspondiente
					 Nombre[j]=Nombre[j+1];
					 //asignamos el auxiliar en el lugar correspondiente
					 Nombre[j+1]=aux;

			}

	}

	return Nombre


}





	
 	/*var Nombre =["Edgar", "Lizeth", "Carlos", "Patricia", "Manuel"];
 	var n, i, k, aux;
 	n=lista.length;
 	console.log(Nombre);

 	for(k=1; k<n; k++){
 		for(i=0; i<(n-k); i++){
 			if(lista[i]>lista[i+1]){
 				aux=lista[i];
 				lista[i]=lista[i+1];
 				lista[i+1]=aux;
 			}
 		}
 	}
 	console.log(lista);
 }*/
    
	//function mostrarArrayOrdenado() {
 
    