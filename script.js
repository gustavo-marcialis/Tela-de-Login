function validate() {
	// Obter valores do formulário
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	// Verificar se os campos estão em branco
	if (email == "" || password == "") {
		alert("Por favor, preencha todos os campos.");
		return false;
	}

	// Exibir valor dos campos no alerta
	alert("E-mail: " + email + "\nSenha: " + password);

	// Permitir o envio do formulário
	return true;
}
