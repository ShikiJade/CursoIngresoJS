function mostrar()
{

	var precio;
	var porcentajedescuento;
	var dinerodescuento;
	var preciodescuento;
	var IVA;
	var preciototal;

	precio=prompt ("Inserte el precio");
	porcentajedescuento=prompt ("Inserte el descuento");

	dinerodescuento=precio*porcentajedescuento/100;
	preciodescuento=precio-dinerodescuento;
	IVA=preciodescuento*21/100;
	preciototal=

	alert ("La primer cuenta es "+dinerodescuento+"  la segunda da "+preciodescuento+"  la tercera da "+IVA);






}
