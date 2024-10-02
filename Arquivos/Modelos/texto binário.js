/* Livre para uso sob a licença MIT  */

// Texto a ser exibido para os estados true ou false
var texto_true = "Seu texto verdadeiro";
var texto_false = "Seu texto falso";
// Personalizar estilo
var cor_true = "green";
var cor_false = "black";
var tamanho_fonte = "11";
var usar_negrito = true;
// Permitir que o texto se comporte como um botão
var permitir_clique = true;
// Pedir confirmação antes de alterar o valor
var janela_confirmacao = true;

// NÃO ALTERE A PARTIR DAQUI

var s = "";
var cor = "";
var texto = "";
var classeBinTxt = "textoBinario" + pointComponent.id;
var comando = "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", ";
var confirmacao = "if (window.confirm(\"Alterar valor?\")) ";

if (value == true) {
	comando += "false);";
	cor = cor_true;
	texto = texto_true;
} else {
	comando += "true);";
	cor = cor_false;
	texto = texto_false;
}

if (permitir_clique == false) {
	s += "<p class='" + classeBinTxt + "'>" + texto + "</p>";
} else if (janela_confirmacao == true) {
	s += "<p class='" + classeBinTxt + "' onclick='" + confirmacao + comando + "'>" + texto + "</p>";
} else {
	s += "<p class='" + classeBinTxt + "' onclick='" + comando+ "'>" + texto + "</p>";
}

s += "<style>";
s += "." + classeBinTxt + "{";
s += "color: " + cor + ";";
s += "text-align: center;";
s += "font-size: " + tamanho_fonte + "px;";
if (usar_negrito == true) {
	s += "font-weight: bold;";
}
s += "}";
s += "</style>";

return s;
