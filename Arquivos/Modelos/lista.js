/* Livre para uso sob a licença MIT  */

// Configurar opções da lista, no formato >> "nome:valor", <<
var opcoes = [
	"Zero:0",
	"Um:1",
	"Dois:2",
	"Três:3",
	"Quatro:4",
	"Cinco:5",
]

// NÃO ALTERE A PARTIR DAQUI

var s = "";
var comando = "if (this.selectedIndex != 0) mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", this.options[this.selectedIndex].value)";

// Criando seletor HTML
s += "<select onchange='" + comando + "'>";
// Opção neutra
s += "<option>(indefinido)</option>";

for (var i in opcoes) {
	var foo = opcoes[i].split(":");
	s+= "<option value='" + foo[1] + "';" ;
	if (value == foo[1]) {
		s+= " selected ";
	}
	s+= ">" + foo[0] + "</option>";
}
s+="</select>";

return s;
