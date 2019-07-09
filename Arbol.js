//variables globales
var Edad;
var altura=['2.00','1.36','1.10','1.60'];
class Arbol{
	constructor(c, al, an, x, y, rr, h){
		this.Color = c;
		this.Altura = al;
		this.Ancho = an;
		this.X = x;
		this.Y = y;
        var radio = this.Ancho/2;
        this.RadioCopa = radio;
        this.RadioRueda = rr;
        this.DistanciaCP = h;
	}

	Dibujar(contextoDeDibujo){
    Edad=['3', '5', '10', '1'];

		//Crear una pluma con el color
		contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

        var xa = 0;
        var ya = 0;
        var xi = 0;
        var yi = 0;
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;
        var isPrimerPunto = true;
		for (var alfa = 0; alfa <= 2*Math.PI; alfa=alfa+0.01) {
            xi = xc + ((this.RadioCopa+this.RadioRueda)*Math.sin(alfa))-(this.RadioRueda*Math.sin(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            yi = yc + ((this.RadioCopa+this.RadioRueda)*Math.cos(alfa))-(this.RadioRueda*Math.cos(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            if(!isPrimerPunto){
                //Trazar línea
                contextoDeDibujo.beginPath();
                contextoDeDibujo.moveTo(xa, ya);
                contextoDeDibujo.lineTo(xi, yi);
                contextoDeDibujo.stroke();
            }
            isPrimerPunto=false;
            xa = xi;
            ya = yi;
        }

           // brown rectangle
           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(35,106,18,50);
           contextoDeDibujo.rect(35,106,18, 50);
           contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(120,116,25,60);
           contextoDeDibujo.rect(120,116,25, 60);
           contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(220,126,25,70);
           contextoDeDibujo.rect(220,126,25, 70);
           contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(335,136,30,80);
           contextoDeDibujo.rect(335,136,30, 80);
           contextoDeDibujo.stroke();

        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText("Edad:"+Edad[0], 15,180);
        contextoDeDibujo.strokeText("Edad:"+Edad[1], 102, 200);
        contextoDeDibujo.strokeText("Edad:"+Edad[2], 200, 220);
        contextoDeDibujo.strokeText("Edad:"+Edad[3], 316, 240);

        contextoDeDibujo.stroke();

        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText("Al:"+altura[0], 15,200);
        contextoDeDibujo.strokeText("Al:"+altura[1], 102, 220);
        contextoDeDibujo.strokeText("Al:"+altura[2], 200, 240);
        contextoDeDibujo.strokeText("Al:"+altura[3], 316, 260);

        contextoDeDibujo.stroke();
      

           

        }


        DibujarOrdenado(contextoDeDibujo){
          var edad=[];
    
        edad=burbuja1(Edad);

    //Crear una pluma con el color
    contextoDeDibujo.strokeStyle = this.Color; // Stroke lines in blue

        var xa = 0;
        var ya = 0;
        var xi = 0;
        var yi = 0;
        var xc = this.X + this.RadioCopa;
        var yc = this.Y + this.RadioCopa;
        var isPrimerPunto = true;
    for (var alfa = 0; alfa <= 2*Math.PI; alfa=alfa+0.01) {
            xi = xc + ((this.RadioCopa+this.RadioRueda)*Math.sin(alfa))-(this.RadioRueda*Math.sin(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            yi = yc + ((this.RadioCopa+this.RadioRueda)*Math.cos(alfa))-(this.RadioRueda*Math.cos(alfa*(1+(this.RadioCopa/this.RadioRueda))));
            if(!isPrimerPunto){
                //Trazar línea
                contextoDeDibujo.beginPath();
                contextoDeDibujo.moveTo(xa, ya);
                contextoDeDibujo.lineTo(xi, yi);
                contextoDeDibujo.stroke();
            }
            isPrimerPunto=false;
            xa = xi;
            ya = yi;
        }

           // brown rectangle
           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(35,106,18,50);
           contextoDeDibujo.rect(35,106,18, 50);
           contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(120,116,25,60);
           contextoDeDibujo.rect(120,116,25, 60);
           contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(220,126,25,70);
           contextoDeDibujo.rect(220,126,25, 70);
           contextoDeDibujo.stroke();

           contextoDeDibujo.beginPath();
           contextoDeDibujo.strokeStyle = "brown";
           contextoDeDibujo.fillStyle = "brown";
           contextoDeDibujo.fillRect(335,136,30,80);
           contextoDeDibujo.rect(335,136,30, 80);
           contextoDeDibujo.stroke();

        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText("Edad:"+edad[0], 15,180);
        contextoDeDibujo.strokeText("Edad:"+edad[2], 102, 200);
        contextoDeDibujo.strokeText("Edad:"+edad[3], 200, 220);
        contextoDeDibujo.strokeText("Edad:"+edad[1], 316, 240);

        contextoDeDibujo.stroke();

        contextoDeDibujo.font="15pt sans-seri"; //estilo de texto
        contextoDeDibujo.strokeStyle="black";//color externo
        contextoDeDibujo.strokeText("Al:"+altura[2], 15,200);
        contextoDeDibujo.strokeText("Al:"+altura[1], 102, 220);
        contextoDeDibujo.strokeText("Al:"+altura[3], 200, 240);
        contextoDeDibujo.strokeText("Al:"+altura[0], 316, 260);

        contextoDeDibujo.stroke();

      }
      

        
}



    
