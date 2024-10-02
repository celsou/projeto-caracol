/* Livre para uso sob a licença MIT  */

// ID único para o elemento. Deixe vazio para usar o XID
var id_zumbi = "";
// Exibe ou oculta o nome do zumbi
var invisivel = false;

// NÃO ALTERE A PARTIR DAQUI

if ((id_zumbi.length == 0) || (typeof id_zumbi == "undefined")) {
	id_zumbi = point.xid;
}

var idZumbi= "zumbi" + id_zumbi;
var comando = "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", this.value)";

var s = "<input type='hidden' id='" + idZumbi + "' value='" + value + "' onchange='" + comando + "'></input>";

if (invisivel == false) {
	s += "<p><strong> Zumbi " + id_zumbi + " (" + point.name + ") </strong></p>";
}

return s;
