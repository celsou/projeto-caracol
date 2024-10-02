/* Livre para uso sob a licença MIT  */

// Configurar colunas a serem mostradas na tabela
var mostrar_id = true;
var mostrar_email = true;
var mostrar_telefone = true;
var mostrar_admin = true;
var mostrar_login = true;

// Personalizar estilo da tabela
var cor_cabecalho = "#009933";
var cor_texto_cabecalho = "white";
var tamanho_fonte = 12;
var largura = 500;

// Definir o uso de arquivo CSS externo p/ personalização
var usar_css_externo = false;
var classe_css = "minhaTabela";



// NÃO ALTERE A PARTIR DAQUI

var s = "";

// Definir se usará CSS interno ou externo
if (usar_css_externo == false) {
	classe_css = "activeTable" + pointComponent.id;
	s += createCSS();
}

// Invocar a função para criar a tabela
s += createTable();

// Retornar, como string, o código HTML criado
return s;

// *** Funções especiais ***

// Função para criar a tabela de usuários ativos
function createTable() {
	var users = new com.serotonin.mango.db.dao.UserDao().getActiveUsers();
	var time = new java.text.SimpleDateFormat("HH:mm dd/MM/yyyy");
	var body = "";
	var header = "";
	var size = users.size();

	for (var i = 0; i < size; i++) {
		var thisUser = users.get(i);
				
		header = "<tr>";
		body += "<tr>";
		
		if (mostrar_id == true) {
			header += "<th> ID </th>";
			body += "<td>" + thisUser.id + "</td>";
		}
		
		header += "<th> Usuário </th>";
		body += "<td>" + thisUser.username + "</td>";
		
		if (mostrar_email == true) {
			header += "<th> E-mail </th>";
			body += "<td>" + thisUser.email + "</td>";
		}
		if (mostrar_telefone == true) {
			header += "<th> Telefone </th>";
			body += "<td>" + thisUser.phone + "</td>";
		}
		if (mostrar_admin == true) {
			header += "<th> É admin? </th>";
			if (thisUser.admin == true) {
				body += "<td> Sim </td>";
			} else {
				body += "<td> Não </td>";
			}
		}
		if (mostrar_login == true) {
			header += "<th> Último login </th>";
			if (thisUser.isFirstLogin() == false) {
				body += "<td>" + time.format(thisUser.lastLogin) + "</td>";
			} else {
				body += "<td> Nunca </td>";
			}
		}
		header += "</tr>";
		body += "</tr>";
	}

	return "<table class='" + classe_css + "'>" + header + body + "</table>";
}

// Função para criar um CSS interno básico para a tabela
function createCSS() {
	var css = "";
	css += "<style>";
	
	css += "." + classe_css + "{";
	css += "	font-family: Arial, Helvetica, sans-serif;";
	css += "	font-size: " + tamanho_fonte + "px;";
	css += "	border-collapse: collapse;";
	css += "	width: " + largura + "px;"
	css += "}";

	css += "." + classe_css + " td, ." + classe_css + " tr {";
	css += "	border: 1px solid #cacaca;";
	css += "	padding: 8px;";
	css += "}";

	css += "." + classe_css + " tr:nth-child(odd) { background-color: #f0f0f0; }";
	css += "." + classe_css + " tr:nth-child(even) { background-color: #ffffff; }";
	css += "." + classe_css + " tr:hover { background-color: #d3d3d3; }";

	css += "." + classe_css + " th {";
	css += "	padding: 8px;";
	css += "	text-align: left;";
	css += "	background-color: " + cor_cabecalho + ";";
	css += "	border: 1px solid " + cor_cabecalho + ";";
	css += "	color: " + cor_texto_cabecalho + ";";
	css += "}";

	css += "</style>";
	return css;
}
