console.log('ok');
window.onload = function()
 {
 	validar();
 }

function validar ()
{	var cifrar= function (){
	debugger;
 	 	var textoSinCifrar = getElementById('texto1').value,
 	 		posicion = +getElementById('numero').value,
 	 		i = 0,
 	 		textoCifrado = '';

 	 	for(i = 0; i < textoSinCifrar.length; i++){
 	 		textoCifrado += String.fromCharCode(textoSinCifrar.charCodeAt(i) + posicion);
 	 	}
 		return textoCifrado;
 	}


 	getElementById("validar").addEventListener('click', function(event){
 		getElementById("texto2").innerHTML = cifrar();
 	});
 }

 //función auxiliar...
 function getById(textarea)
 {
 	return document.getElementById(textarea);
 }
