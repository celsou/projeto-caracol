/* Livre para uso sob a licença MIT  */

// Quantos valores serão exibidos?
var numero_valores = 10;

// NÃO ALTERE A PARTIR DAQUI

var valores = new com.serotonin.mango.db.dao.PointValueDao();
valores = valores.getLatestPointValues(point.id, numero_valores);

var s = "";
s += "<table class='latestValuesTable'>";

var size = valores.size();
for (var i = 0; i < size; i++) {
	s += "<tr> <td> " + valores.get(i).value + "</tr> </td>";
}

s += "</table>";

s += "<style>";
s += ".latestValuesTable {";
s += "	font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;";
s += "	border-collapse: collapse;";
s += "	border: 1px solid #000000;";
s += "}";
s += ".latestValuesTable td {";
s += "	padding: 4px;";
s += "	background-color: #FFFFFF";
s += "}";
s += "</style>";

return s;
