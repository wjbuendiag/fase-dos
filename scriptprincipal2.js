$(document).on("ready",configurarApp);

function configurarApp ()
{
	var canvas = document.getElementById('micanvas');
	var ctx = canvas.getContext('2d');
	canvas.width = screen.availWidth;
	
}