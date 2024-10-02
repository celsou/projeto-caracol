/* Livre para uso sob a licença MIT  */

// Imagens a serem usadas para o estado true ou false
var imagem_true = "/ScadaBR/graphics/Leds48/led48_green_1.png";
var imagem_false = "/ScadaBR/graphics/Leds48/led48_green_0.png";
// Permitir que as imagens se comportem como um botão
var permitir_clique = false;

// NÃO ALTERE A PARTIR DAQUI

var comando = "";
if (permitir_clique == true) {
	comando = "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", " + !value + ")";
}

if (value == true) {
	return "<img src='" + imagem_true + "' onclick='" + comando + "'></img>";
} else {
	return "<img src='" + imagem_false + "' onclick='" + comando + "'></img>";
}
