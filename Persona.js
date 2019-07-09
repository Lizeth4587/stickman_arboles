//variables globales
var Nombre;
var edad=['25','22','20','19','28'];
class Persona{
	constructor(n, e, c, al, an, x, y){
		this.Nombre = n;
		this.Edad = e;
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
	}

	Hablar(mensaje){
		alert(mensaje);
	}
    
	Dibujar(contextoDeDibujo){
        Nombre=['Edgar', 'Lizeth', 'Carlos', 'Patricia', 'Manuel'];
        
		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

		//Dibujar la cabeza
		var radio = this.Ancho/2;
		contextoDeDibujo.beginPath();
        contextoDeDibujo.arc(this.X+radio, 
        					 this.Y+radio,
            				 radio,
            				 0,
            				 2*3.1416,
            				 true);
        contextoDeDibujo.stroke();

        //Dibujar el tronco
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
        						this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,
        						this.Y+3*radio);
        contextoDeDibujo.stroke();

        //Dibujar manos
        var Ancho=this.X;
        var Altura=this.Y+radio*2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X,
                                this.Y+1.2*radio*2);
        contextoDeDibujo.lineTo(this.X+Altura/2,
                                this.Y+1.2*radio*2);
        contextoDeDibujo.stroke();

        //Dibujar Pie Izquierdo
        var Ancho=this.X+radio;
        var Altura=this.Y+radio*2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                this.Y+3*Altura/4);
        contextoDeDibujo.lineTo(this.X,
                                this.Y+Altura);
        contextoDeDibujo.stroke();

        //Dibujar Pie Derecho
        var Ancho=this.X+radio;
        var Altura=this.Y+radio*2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                this.Y+3*Altura/4);
        contextoDeDibujo.lineTo(this.X+radio*2,
                                this.Y+Altura);
        contextoDeDibujo.stroke();

        

        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText(""+Nombre[0], 15,180);
        contextoDeDibujo.strokeText(""+Nombre[1], 105, 180);
        contextoDeDibujo.strokeText(""+Nombre[2], 192, 180);
        contextoDeDibujo.strokeText(""+Nombre[3], 280, 180);
        contextoDeDibujo.strokeText(""+Nombre[4], 370, 180);
        
        contextoDeDibujo.stroke();

        

        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText("Edad:"+edad[0], 15, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[1], 105, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[2], 192, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[3], 280, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[4], 370, 210);

        contextoDeDibujo.stroke();

   
    
    }
        
DibujarOrdenado(contextoDeDibujo){
    var nombre=[];
    
        nombre=burbuja(Nombre);
    //Crear una pluma con el color
    contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue
    
    //Dibujar la cabeza
    var radio = this.Ancho/2;
    contextoDeDibujo.beginPath();
        contextoDeDibujo.arc(this.X+radio, 
                             this.Y+radio,
                                 radio,
                                 0,
                                 2*3.1416,
                                 true);
        contextoDeDibujo.stroke();
    
        //Dibujar el tronco
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                this.Y+2*radio);
        contextoDeDibujo.lineTo(this.X+radio,
                                this.Y+3*radio);
        contextoDeDibujo.stroke();
    
        //Dibujar manos
        var Ancho=this.X;
        var Altura=this.Y+radio*2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X,
                                                        this.Y+1.2*radio*2);
        contextoDeDibujo.lineTo(this.X+Altura/2,
                                                        this.Y+1.2*radio*2);
        contextoDeDibujo.stroke();
    
        //Dibujar Pie Izquierdo
        var Ancho=this.X+radio;
        var Altura=this.Y+radio*2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                                        this.Y+3*Altura/4);
        contextoDeDibujo.lineTo(this.X,
                                                        this.Y+Altura);
        contextoDeDibujo.stroke();
    
        //Dibujar Pie Derecho
        var Ancho=this.X+radio;
        var Altura=this.Y+radio*2;
        contextoDeDibujo.beginPath();
        contextoDeDibujo.moveTo(this.X+radio,
                                                        this.Y+3*Altura/4);
        contextoDeDibujo.lineTo(this.X+radio*2,
                                                        this.Y+Altura);
        contextoDeDibujo.stroke();
    
        
    
        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText(""+nombre[0], 15,180);
        contextoDeDibujo.strokeText(""+nombre[1], 105, 180);
        contextoDeDibujo.strokeText(""+nombre[2], 192, 180);
        contextoDeDibujo.strokeText(""+nombre[3], 280, 180);
        contextoDeDibujo.strokeText(""+nombre[4], 370, 180);
        
        contextoDeDibujo.stroke();
    
        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText("Edad:"+edad[3], 15, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[2], 105, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[1], 192, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[0], 280, 210);
        contextoDeDibujo.strokeText("Edad:"+edad[4], 370, 210);
    
        contextoDeDibujo.stroke();
    
    
    
    }
    
	/*
	--------------------------------------
		CODIGO DE C# DEL MÉTODO DIBUJAR
	--------------------------------------
		public bool Dibujar(Graphics contextoDeDibujo)
        {
            //Crear una pluma con el color
            //definido para el objeto Persona
            Pen MiPluma = new Pen(this.Color);

            //Dibujar la cabeza
            contextoDeDibujo.DrawEllipse(MiPluma,
                this.X, this.Y,
                this.Ancho, this.Altura/4);

            //Dibujar el tronco
            contextoDeDibujo.DrawLine(MiPluma,
                this.X + this.Ancho / 2,
                this.Y + this.Altura / 4,
                this.X + this.Ancho / 2,
                this.Y + (3 * this.Altura) / 4);

            //Dibujar manos
            contextoDeDibujo.DrawLine(MiPluma,
                this.X,
                this.Y + this.Altura / 2,
                this.X + this.Ancho,
                this.Y + this.Altura / 2);

            //Dibujar pierna izquierda
            contextoDeDibujo.DrawLine(MiPluma,
                this.X + this.Ancho / 2,
                this.Y + (3 * this.Altura) / 4,
                this.X,
                this.Y + this.Altura);

            //Dibujar pierna derecha
            contextoDeDibujo.DrawLine(MiPluma,
                this.X + this.Ancho / 2,
                this.Y + (3 * this.Altura) / 4,
                this.X + this.Ancho,
                this.Y + this.Altura);

            //Escribir Nombre de la Persona
            contextoDeDibujo.DrawString(this.Nombre,
                new Font("Arial", 12),
                new SolidBrush(this.Color),
                this.X, this.Y - 20);

            return true;
        }
	*/
}