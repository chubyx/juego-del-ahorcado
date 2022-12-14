var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext('2d');
pincel.fillStyle = "";
pincel.fillRect(0,0,800,600); 


//DIBUJAR LA BASE DE LA ORCA
function dTablero(palabra) {

    xi = 350;
    
    pincel.beginPath();
    pincel.clearRect(0, 0, 800, 600);
    pincel.width = pincel.width;

    //Dibujo de la base
    pincel.fillStyle = "rgb(241, 241, 241)";
    pincel.fillRect(50, 550, 75, 35);
    pincel.moveTo(25,590);
    pincel.lineTo(50,550);
    pincel.lineTo(50,590);
    pincel.fill();

    //dibujo lados de base
    pincel.moveTo(150,590);
    pincel.lineTo(125,550);
    pincel.lineTo(125,590);
    pincel.fill();

    dGuiones(palabra);

}

//inicio : determina el inicio desde donde se escribiran las letras
var inicio = 0;
//ancho: es el ancho de cada cuadro para escribir la letra
var ancho = 40;
var xcentro = 500;
var ybase = 525;
//Dibujo de guiones base de cada letra
function dGuiones(palabra) {
    var factor = Math.floor(palabra.length / 2);
    inicio = xcentro - (factor * ancho );
    var x = inicio;

     for (let i = 0; i < palabra.length; i++) {
         pincel.fillStyle = "blue";
         pincel.fillRect(x, ybase, ancho, 45);
         x += ancho + 5; 
     }
}

//PINTAR LETRA/S CORRECTAS
function dLetrac(letra) {
    var p = ancho + 5;
    //para saber cuantas veces debo reemplazar la letra
    var regexp = RegExp(letra, 'g');
    var repeticiones = palabraSecreta.match(regexp).length;
    
    //pinto todas las letras correctas que contenga la palabraSecreta
    var i=0;
    var j=0;
    while (i < repeticiones) {
        if (palabraSecreta[j] == letra) {
            palabraIngresada[j] = letra;
            ++i;
            var xc = ( j * p ) + inicio;
            pincel.font="30pt Verdana";
	        pincel.fillStyle = "white";
	        pincel.fillText(letra, xc + 5, ybase + 40);
        }
        ++j;
    }
}

//PINTAR LETRA INCORRECTA
var xi = 350;
var yi = 350;
function dLetrai(letra) {
    pincel.font="30pt Tahoma";
	pincel.fillStyle = "red";
	pincel.fillText(letra, xi, yi);
    xi += ancho;
    if (xi > 780) {
        xi = 350;
        yi += 40;
    }
}

function dAhorcado(paso) {

    switch (paso) {
        case 1:
            //orca 1
            pincel.fillStyle = "rgb(241, 241, 241)";
            pincel.fillRect(75, 300, 25, 250);
            
            break;
        case 2:
                //orca 2
            pincel.fillStyle = "rgb(241, 241, 241)";
            pincel.fillRect(75, 50, 25, 250);
            
            break;
        case 3:
            //orca 3
            pincel.fillStyle = "rgb(241, 241, 241)";
            pincel.fillRect(75, 50, 200, 25);
            break;
        case 4:
            //orca 4
            pincel.fillStyle = "rgb(241, 241, 241)";
            pincel.fillRect(270, 50, 10, 150);
            break;
        case 5:
        //cabeza
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(275, 240, 40,0,Math.PI * 2);
        pincel.fill();
        pincel.beginPath();
            pincel.fillStyle = "white";
            //ojo izquierdo
            pincel.arc(260, 230, 10, 0, Math.PI * 2);
            //ojo derecho
            pincel.arc(290, 230, 10, 0, Math.PI * 2);
            pincel.fill();
            //boca
            pincel.beginPath();
            pincel.ellipse(275, 260, 15, 15, 0, 0, Math.PI *2);
            pincel.fill();

            break;
        case 6:
        //cuerpo
            pincel.beginPath();
            pincel.fillStyle = "black";
            pincel.fillRect(270, 280, 10, 110);
            
            break;
        case 7:
            pincel.beginPath();
            pincel.fillStyle = "black";
            //braso derecho
            pincel.moveTo(280,300);
            pincel.lineTo(375,230);
            pincel.lineTo(375,240);
            pincel.lineTo(280,310);
            pincel.fill();

                break;
        case 8:
                pincel.beginPath();
                pincel.fillStyle = "black";
    
                //braso izquierdo
                pincel.moveTo(275,300);
                pincel.lineTo(185,235);
                pincel.lineTo(185,245);
                pincel.lineTo(275,310);
                pincel.fill();
                
                break;
        case 9:
                //pie derecho
                pincel.beginPath();
                pincel.fillStyle = "black";   
                pincel.moveTo(270,380);
                pincel.lineTo(375,475);
                pincel.lineTo(375,480);
                pincel.lineTo(270,390);
                pincel.fill();

            break;
        case 10:
            //pie izquierdo
            pincel.beginPath();
            pincel.fillStyle = "black";   
        
            pincel.moveTo(270,380);
            pincel.lineTo(175,475);
            pincel.lineTo(175,480);
            pincel.lineTo(270,390);
            pincel.fill();
            //FIN DEL JUEGO
            pincel.font="40pt Arial";
	        pincel.fillStyle = "red";
	        pincel.fillText("Fin del juego", 450, 200);
            console.log("FIN DEL JUEGO");
            break;
        case 11:
                pincel.font="40pt Arial";
                pincel.fillStyle = "blue";
                pincel.fillText("GANASTE!!!", 450, 200);
                console.log("GANASTE");
                break;    
    }
    

    









    
}
