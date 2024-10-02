/* Livre para uso sob a licença MIT  */

// Configurar colunas a serem mostradas na tabela
var mostrar_id = true;
var mostrar_email = true;
var mostrar_telefone = false;
var mostrar_admin = false;
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
	classe_css = "onlineTable" + pointComponent.id;
	s += createCSS();
}

// Invocar a função para criar a tabela
s += createTable(getOnlineUsers());

// Retornar, como string, o código HTML criado
return s ;


// *** Funções especiais ***

// Função para criar uma tabela a partir de um array de nomes de usuários
function createTable(usernames) {
	var body = "";
	var header = "";
	var sdf = new java.text.SimpleDateFormat("HH:mm dd/MM/yyyy");
	var users = new com.serotonin.mango.db.dao.UserDao();
	
	// Colocar os nomes de usuários em ordem alfabética
	usernames = usernames.sort(function (a, b) {
					return (a.toLowerCase() > b.toLowerCase()) ? 1 : -1;
				});
	
	// Criar a linha de cada usuário na tabela
	for (i in usernames) {
		var thisUser = users.getUser(usernames[i]);
		
		// Adicionar os usuários anônimos (das public views e etc...)
		if ((usernames[i] == "unknown") || (usernames[i] === null)) {
			thisUser = {	username: "Acesso(s) anônimo(s)",
							id: "-",
							email: "-",
							phone: "-",
							admin: false
			};
		}
		
		// Criar as colunas da tabela, conforme configurado nas variáveis booleanas
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
			header += "<th> Hora login </th>";
			if (thisUser.username != "Acesso(s) anônimo(s)") {
				body += "<td>" + sdf.format(thisUser.lastLogin) + "</td>";
			} else {
				body += "<td> Desconhecido </td>";
			}
		}
		header += "</tr>";
		body += "</tr>";
	}
	
	// Retornar, como string, a tabela gerada
	return "<table class='" + classe_css + "'>" + header + body + "</table>";
}

// Função para ler o datapoint contendo o nome dos usuários online
function getOnlineUsers() {
	// Procurar por usuários online nos últimos x minutos
	var minutos = 5;
	// Outras variáveis necessárias (melhor não alterar...)
	var onlineList = new Array();
	var since = time - (60000 * minutos);
	var names = new com.serotonin.mango.db.dao.PointValueDao();
	names = names.getPointValues(point.id, since);
	
	var size = names.size();
	
	for (var i = size; i > 0; i--) {
		var thisName = String(names.get((i - 1)).value);
		thisName = decodeURIComponent(thisName);
		
		if (searchArray(thisName, onlineList) == false) {
			onlineList.push(thisName);
		}
	}
	return onlineList;
}

// Função para buscar nomes duplicados no array
function searchArray(string, array) {
	for (var i in array) {
		if (string == array[i]) {
			return true;
		}
	}
	return false;
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
