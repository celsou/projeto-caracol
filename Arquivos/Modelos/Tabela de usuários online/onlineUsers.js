/********************************************************
 * Projeto Caracol, 2020
 * 
 * Este script obtém o nome do usuário ativo no ScadaBR
 * e envia-o para o HTTP Reciever através do parâmetro
 * "onlineuser", ao carregar uma página ou a cada 4 mi-
 * nutos, permitindo que o administrador do sistema ob-
 * tenha facilmente uma relação dos usuários online.
 * 
 * Licença: MIT
*********************************************************/

/* Aguardar o carregamento da página */
if (onlineUsers_testBrowser() == "old") {	
	setTimeout(onlineUsers_registerOnlineUsers, 8500);
} else {
	window.onload = setTimeout(onlineUsers_registerOnlineUsers, 3000);
}

/* Função para testar se o navegador é o Internet Explorer 8 ou anterior */
function onlineUsers_testBrowser() {
	if ((navigator.appName.search("Internet Explorer") != -1) && 
		(navigator.appName.search("MSIE 9") == -1) && 
		(navigator.appName.search("MSIE 1") == -1)) {	
		return "old";
	} else {
		return "new";
	}
}

/* Função principal, registra usuários online */
function onlineUsers_registerOnlineUsers() {
	/* Url (relativa) do HTTP Reciever */
	var url = "/ScadaBR/httpds";
	/* Minutos entre confirmações de estado online */
	var minutos = 4;

	/* Não registrar o usuário que não fez login */
	if (window.location.href.search("login.htm") >= 0) {
		return;
	}
	
	/* Registrar usuário online ao carregar a página */
	onlineUsers_sendUserInfo(url);
	
	/* E depois registrar a cada x minutos */
	setInterval(function() {
		onlineUsers_sendUserInfo(url);
	}, (minutos * 60000) );
}

/* Função que envia o nome do usuário para o HTTP Reciever */
function onlineUsers_sendUserInfo(url) {
	/* Obter nome de usuário */
	var username = onlineUsers_readUsername();

	/* Criar Iframe, se não existir */
	if (document.getElementById("onlineUsers_contentDiv") === null) {
		onlineUsers_createIframe(url);
	}

	/* Enviar formulário */
	document.getElementById("onlineUsers_contentDiv").querySelector("input").value = username;
	document.getElementById("onlineUsers_contentDiv").querySelector("form").submit();
}

/* Função que obtém o nome do usuário ativo no ScadaBR */
function onlineUsers_readUsername() {
	/* Tentar obter nome de usuário ou definir como "desconhecido" */
	var username = "";
	if (document.querySelector("span.copyTitle > b") !== null) {
		username =  document.querySelector("span.copyTitle > b").innerHTML.toString();
		username = encodeURIComponent(username);
	} else {
		username = "unknown";
	}
	
	/* Retornar dado obtido */
	return username;
}

/* Função que cria um formulário para ser enviado num Iframe (para contornar o CORS) */
function onlineUsers_createIframe(url) {
	/* Contornar um problema do HTTP Reciever convertendo localhost para IPv4 */
	if (window.location.hostname.search("localhost") >= 0) {
		url = window.location.protocol + "//" + "127.0.0.1" + ":" + window.location.port + url;
	}
	
	/* Criar uma Div para organizar os elementos */	
	var invisibleDiv = document.createElement("div");
	invisibleDiv.id = "onlineUsers_contentDiv";
	invisibleDiv.setAttribute("style", "display: none; width: 0px; height: 0px; border: none; overflow: hidden;");
	
	/* Inserir Iframe e formulário dentro da Div */
	var	inner =	 "<iframe name='onlineUsers_registerUsersFrame'></iframe>"
		inner += "<form target='onlineUsers_registerUsersFrame' method='POST' action='" + url + "'>";
		inner += "		<input name='onlineuser' type='hidden'>";
		inner += "</form>";
	invisibleDiv.innerHTML = inner;
	
	/* Inserir elementos na página */
	document.body.appendChild(invisibleDiv);
}
