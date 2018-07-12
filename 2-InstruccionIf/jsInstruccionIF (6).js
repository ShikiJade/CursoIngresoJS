function mostrar()
{
//tomo la edad  

	var edad;
	
	edad=document.getElementById('edad').value;
/* Dentro de cada else puedo subdividir mas grupos
de esta manera de manera indefinida y hacer un
menor consumo del procesador.*/
if (edad<13) 
		{
			alert ("Ustedes un niño.");
		}
else 
		{
			if (edad>17) 
				{
					alert ("Ustedes un mayor de edad.");
				}
			else
				{
			 
					alert ("Usted es adolescente");
				}	
		}
/*Puede ir "else if" directamente sin llaves,
pero me parece mas ordenado recalcar el bloque a
la vista.
	if (edad<13) 
		{
			alert ("Ustedes un niño.");
		}
	if (edad>17) 
		{
			alert ("Ustedes un mayor de edad.");
		}
	if (edad >12 && edad<18)
		{	 
			alert ("Usted es adolescente");
		}
MUCHO USO DEL PROCESADOR!
 mas if y mas bloques consumen mas procesador*/
}//FIN DE LA FUNCIÓN