function burbuja1(Edad){
	for(i=0;i<(Edad.length-1);i++)
	//recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
	for(j=0;j<(Edad.length-i);j++){

			//comparamos
			if(Edad[j]>Edad[j+1]){
					 //guardamos el nombre mas alejado alfabeticamente en el auxiliar
					 aux=Edad[j];
					 //guardamos el nombre menor en el lugar correspondiente
					 Edad[j]=Edad[j+1];
					 //asignamos el auxiliar en el lugar correspondiente
					 Edad[j+1]=aux;

			}

	}

	return Edad


}
