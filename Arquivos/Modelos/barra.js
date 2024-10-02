/* Livre para uso sob a licença MIT  */

// Defina o valor máximo e mínimo da escala
var maximo = 100;
var minimo = 0;
// Personalizar a barra
var altura = 250;
var largura = 20;
var cor_barra = "#12CE00";
// Modo "vertical" ou "horizontal"
var modo = "vertical";
var inverter_sentido = false;

// NÃO ALTERE A PARTIR DAQUI

// Criação de uma classe única para cada elemento
var classePai = "barraPai" + pointComponent.id;
var classeFilho = "barraFilho" + pointComponent.id;

// Conversão da escala do ponto para porcentagem
var porcentagem = 0;
if (value > maximo) {
	porcentagem = 100;
} else if (value < minimo) {
	porcentagem = 0;
} else {
	porcentagem = ((value - minimo) / (maximo - minimo)) * 100;
}
var porcentagem_inv = 100 - porcentagem;

// Criação dos elementos HTML
var s =  "<div class='" + classePai + "'><div class='" + classeFilho + "'></div></div>";
    s += "<style>";
    s += " ." + classePai + " {";
    s += "background:		#FFFFFF;";
    s += "border:			solid 1px;";
    s += "border-color: 	black;";
    s += "height: " + altura + "px;";
    s += "width:	" + largura + "px;";
    s += "}";
    
    s += " ." + classeFilho + " {";
    s += "background: " + cor_barra + ";";
    s += "position:		relative;";
	if (modo == "horizontal") {
			s += "height:		100%;";
			s += "width: " + porcentagem + "%;";
	} else {
			s += "height: " + porcentagem + "%;";
			s += "width:		100%;";
	}
	if ((inverter_sentido == true) && (modo == "horizontal")) {
		s += "left: " + porcentagem_inv + "%;";
	} else if ((inverter_sentido == false) && (modo == "vertical")) {
		s += "top: " + porcentagem_inv + "%;";
	}
	s += "</style>";
return s;
