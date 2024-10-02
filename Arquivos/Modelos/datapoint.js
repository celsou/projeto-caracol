/* Livre para uso sob a licença MIT  */

// Descrição do datapoint exibido. Oculta se omitida.
var descricao_do_datapoint = "Data Point";
// Definir prefixo e sufixo do valor (se necessário)
var prefixo = "";
var sufixo = "";
var casas_decimais = 0;
// Personalizar estilo
var largura_minima = 70;
var altura_minima = 50;
var cor_fundo = "black";
var cor_descricao = "white";
var cor_valores = "yellow";
var tamanho_fonte = 11;
var usar_negrito = true;

// NÃO ALTERE A PARTIR DAQUI


// Definindo classe única para os elementos
var classeDp = "datapoint" + pointComponent.id;
// Formatando o valor com prefixo/sufixo
var valorFormatado = prefixo + value.toFixed(casas_decimais) + sufixo;
//var fonte = "Arial, sans serif";

// Criando elementos HTML
var s = "";
s += "<table class='" + classeDp + "'>";
// Primeira linha (descrição)
s += "    <tr> <td>" + descricao_do_datapoint + "</td> </tr>";
// Segunda linha (valor)
s += "    <tr> <td>" + valorFormatado + "</td> </tr>";
s += "</table>";

// Criando estilos CSS
s += "<style>";

// Definindo fundo do datapoint
s += "." + classeDp + " {";
s += "    height: " + altura_minima + "px;";
s += "    width: " + largura_minima + "px;";
s += "    background: " + cor_fundo + ";";
s += "    border-collapse: collapse;";
s += "    border: 1px solid;";
s += "    border-color: gray;";
s += "}";

// Configurando fonte
s += "." + classeDp + " tr {"
s += "    text-align: center;";
s += "    font-size: " + tamanho_fonte + "px;";
//s += "    font-family: " + fonte + ";";
if (usar_negrito == true) {
	s += "font-weight: bold;";
}
s += "}";

// Configurando padding dos textos
s += "." + classeDp + " tr:nth-child(1) td {";
if ((descricao_do_datapoint.length > 0) && (typeof descricao_do_datapoint != "undefined")) {
	s += "    padding: 2px;";
	s += "    padding-bottom: 0px;";
} else {
	s += "    padding: 0px;";
}
s += "}";
s += "." + classeDp + " tr:nth-child(2) td {";
s += "    padding: 1px;";
s += "}";

// Definindo a cor dos textos
s += "." + classeDp + " tr:nth-child(1) {";
	s += "color: " + cor_descricao + ";";
s += "}";
s += "." + classeDp + " tr:nth-child(2) {";
s += "    color: " + cor_valores + ";";
s += "}";


s += "</style>";
return s;
