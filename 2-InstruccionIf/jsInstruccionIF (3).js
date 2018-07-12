function mostrar()
{
//tomo la edad  
	var edad;
	
	edad=document.getElementById('edad').value;

	if (edad >=18) 
		//vale edad >17
		{
			alert ("Usted es mayor de edad");
		}
	else 
		{
			alert ("Usted es menor de edad");
		}
	/*
	if (edad >=18) 
		//vale edad >17
		{
			alert ("Usted es mayor de edad");
		}
	if (edad <=17) 
		{
			alert ("Usted es menor de edad");
		}
		*/

 /*Else if ejecuta el primer bloque if pero
 no el segundo,
salteando directamente a lo que este detras del 
bloque if.*/

}//FIN DE LA FUNCIÓN