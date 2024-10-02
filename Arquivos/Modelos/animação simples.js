/* Livre para uso sob a licença MIT  */

// A descrição será exibida ao manter o cursor sobre a imagem
var descricao = "Sequência de imagens";
var imagem_padrao = "/ScadaBR/graphics/GreenThermo/thermometer0.jpg";
var usar_valor_exato = false;
// Conjunto de imagens a serem exibidas p/ cada valor
// Use o formato >> "imagem:valor", <<
var imagens = [
	"/ScadaBR/graphics/GreenThermo/thermometer0.jpg:0",
	"/ScadaBR/graphics/GreenThermo/thermometer1.jpg:10",
	"/ScadaBR/graphics/GreenThermo/thermometer2.jpg:20",
	"/ScadaBR/graphics/GreenThermo/thermometer3.jpg:30",
	"/ScadaBR/graphics/GreenThermo/thermometer4.jpg:40",
	"/ScadaBR/graphics/GreenThermo/thermometer5.jpg:50",
	"/ScadaBR/graphics/GreenThermo/thermometer6.jpg:60",
	"/ScadaBR/graphics/GreenThermo/thermometer7.jpg:70",
	"/ScadaBR/graphics/GreenThermo/thermometer8.jpg:80",
	"/ScadaBR/graphics/GreenThermo/thermometer9.jpg:90",
];

// NÃO ALTERE A PARTIR DAQUI

var s = "";

s += "<img ";
if (descricao.length > 0) {
	s += "title='" + descricao + "'";
}

var src = imagem_padrao;
for (var i in imagens) {
	var index = Number(i);
	var valor_atual = Number(imagens[index].substring((imagens[index].lastIndexOf(":") + 1)));
	var proximo_valor = undefined;
	
	if (typeof imagens[(index + 1)] == "string") {
		proximo_valor = Number(imagens[(index + 1)].substring((imagens[(index + 1)].lastIndexOf(":") + 1)));
	}
	
	if (usar_valor_exato == true) {
		if (valor_atual == value) {
			src = imagens[index].substring(0, imagens[index].lastIndexOf(":"));
		}
	} else {
		if ((value >= valor_atual) && ((value < proximo_valor) || (typeof proximo_valor == "undefined"))) {
			src = imagens[index].substring(0, imagens[index].lastIndexOf(":"));
		}
	}
}

s += "src='" + src + "'";
s += "> </img>";

return s;
