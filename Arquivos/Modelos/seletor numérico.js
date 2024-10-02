/* Livre para uso sob a licença MIT  */

// Personalizar estilo
var altura = 25;
var largura = 60;
var cor_fundo = "#FFFFFF";
var cor_texto = "#000000";
// Restringir alteração dos valores
var restringir_valores = true;
var multiplos_de = 1;
var minimo = 0;
var maximo = 100;

// NÃO ALTERE A PARTIR DAQUI

var s = "";
// Compensação da borda + padding
altura -= 6;
largura -= 6;

var comando_normal = "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", value)" ;
var comando_restrito = "if (this.checkValidity()) mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", value)" ;
var comando = (restringir_valores == true) ? comando_restrito : comando_normal;

s += "<input type='number' id='degub' value='" + value + "' ";
s += "style='height: " + altura + "px; width: " + largura + "px; background-color:" + cor_fundo + "; color:" + cor_texto + "; padding: 2px;' " ;
s += "onchange='" + comando + "' ";
if (restringir_valores == true) {
	s += "step='" + multiplos_de + "' min='" + minimo + "' max='" + maximo + "' ";	
}
s += "> </input>";

return s;
