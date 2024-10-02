/* Livre para uso sob a licença MIT  */

// Arquivo de áudio a ser reproduzido
var arquivo_audio = "/ScadaBR/audio/lib/cell_phone.mp3"
// Valor que disparará a reprodução do áudio
var valor_disparo = true;
// Ativar repetição infinita
var ativar_loop = false;

// NÃO ALTERE A PARTIR DAQUI

var s = "";
var loop = "";

if (ativar_loop == true) {
	loop = "loop";
}

if (value == valor_disparo) {
	s += "<audio src=\"" + arquivo_audio + "\" autoplay " + loop + ">"
	s += "Seu navegador não suporta áudio HTML5";
	s += "</audio>";
}

return s;
