/* Livre para uso sob a licença MIT  */

// Descrição a ser exibida no botão
var descricao = "Botão de pulso";
// Personalizar estilo
var altura = 40;
var largura = 90;
var estilo_do_scadabr = true;
// Use false para NA ou true para NF
var valor_padrao = false;
// Pedir confirmação antes de alterar o valor
var janela_confirmacao = false;

// NÃO ALTERE A PARTIR DAQUI

var s = "";
var confirmacao = "if (window.confirm(\"Alterar valor?\")) ";

// Timeout em milissegundos entre mudança de estados
var timeout = 250;

var comando = "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", " + !valor_padrao + ");";
comando += "setTimeout(function() {";
comando += "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", " + valor_padrao + ");";
comando += "}, " + timeout + ");";

if (janela_confirmacao == true) {
	comando = confirmacao + comando;
}

if (estilo_do_scadabr == true) {
	s += "<input type='button' onclick='" + comando + "' style='height:" + altura + "px; width:"+ largura + "px;' value='" + descricao + "' >";
} else {
	s += "<button onclick='" + comando + "' style='height:" + altura + "px; width:"+ largura + "px;'>" + descricao + "</button>";
}

return s;
