function mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	 if (edad<18 && estadoCivil!="Soltero")
	 	{
	 		alert ("Usted es muy pequeño para no ser Soltero");
	 	}
/* "Soltero" va entre comillas porque sino es
considerado una variable.*/

}//FIN DE LA FUNCIÓN