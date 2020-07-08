var getData = function () {
	console.log("Iniciando");
	let usuario = ["Cristian", "Ivan"];
	let contrase = ["holamundo", "hola"];
	var nombre = document.getElementById("txt_user").value;
	var contra = document.getElementById("txt_contra").value;
	//Inicio de sesion
	usuario.forEach(function (elemento, indice, array) {
		console.log(elemento, indice);
		if (nombre == usuario[indice]) {
			console.log("La misma nombre");
			if (contra == contrase[indice]) {
				location.href = "Menu.html";
			}
		} else {
		}
	})
}







