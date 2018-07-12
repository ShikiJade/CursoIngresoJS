function mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;

if (edad >12 && edad<18)
		{
			 
			alert ("Usted es adolescente");
		}



/* Esta seria una version mas larga, para poder
tomar el resto de los grupos y trabajar con ellos
tambien.

	if (edad >12)
		{
			if (edad <18) 
				{
					alert ("Usted es adolescente");
				}
		}
*/	
	




}//FIN DE LA FUNCIÓN