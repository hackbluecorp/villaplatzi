var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("villaplatzi");
var papel = cuadrito.getContext("2d");
var x = 310;
var y = 390;
var xCerdo = 310;
var yCerdo = 390;

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

var cantidad = aleatorio(1, 40);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  papel.drawImage(cerdo.imagen, xCerdo, yCerdo)
}

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0)
  }
  if (vaca.cargaOK)
  {
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y)
    }
  }
}

function aleatorio(min, maxi)
{
  var resuktado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
  return resultado;
}

function moverCerdo(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{

  if (cerdo.cargaOK)
  {
   lienzo.beginPath();
   lienzo.drawImage(cerdo.imagen, xinicial, yinicial)
   lienzo.closePath();
 }
}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujar();
      moverCerdo(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log("Arriba", x, y, x, y - movimiento);
    break;
    case teclas.DOWN:
      dibujar();
      moverCerdo(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      console.log("Abajo", x, y, x, y + movimiento);
    break;
    case teclas.LEFT:
      dibujar();
      moverCerdo(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      console.log("Izquierda", x, y, x - movimiento, y);
    break;
    case teclas.RIGHT:
      dibujar();
      moverCerdo(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      console.log("Derecha", x, y, x + movimiento, y);
    break;
    default:
      console.log("otra tecla");
    break;
  }
}
