function mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;
	
/* El signo de admiracion (desde ahora negacion) 
niega todo lo que esta en el parentesis.
	if (!(edad >12 && edad<18))
			{
				alert ("Usted NO es adolescente");
			}
*/
	if (edad <13 || edad>17)
			{
				alert ("Usted NO es adolescente");
			}
/* || es el signo "o" (altgr+1) donde siempre es una verdad
a menos que ambas sean falsas.
if (edad >12 && edad<18)
		{

		}
else 
		{
		 alert ("Usted NO es adolescente");
		}

el else trabaja sobre la negacion del if anterior.
*/
}//FIN DE LA FUNCIÓN