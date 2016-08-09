alert("Estas a Punto de Ingresar a la pagina de Json");
var respuesta = prompt('Estas seguro');

if (respuesta =="si"){
	 
	 var edad =prompt("Ingresa tu edad");
	 if (edad>=18) alert('Eres apto para ingresar');
	 else
	 alert("No tienes la edad adecuada para ingresar a este sitio");


	var nombre = prompt ('Por favor introduce tu nombre:');
	if (nombre =="") { alert ('No has intrudicino un nombre'); }
	else { alert ('Hola '+nombre + "Bienbenido a mi Pagina Json"); }
	alert("Bienvendio a Este Sitio ");



	var password = prompt("Ingresa tu password");
	if  (password== "12345") alert("Bienvendio");
	else
	alert("password no valida");

	var cuidad = prompt("Ingresa tu Pais");
	if (cuidad=="Guatemla") alert( "Bienvenido");
	else
	alert("Esta no es tu cuidad"); 


} 
else
	alert("No eres Apto para Ingrresar a este Sitio"); 

 
