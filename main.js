const Dp_url = 'https://my-json-server.typicode.com/dp-danielortiz/dptest_jsonplaceholder/items';

function ConsultarElementos(){
	
	fetch(Dp_url)
	//Convertir el objeto a json
	.then(response => response.json() )
	//Recorrer el objeto
	.then(data => {
		console.log(data);
		document.getElementById('elem1').innerHTML = 'Elementos del objeto:';
		document.getElementById("elem2").innerHTML = JSON.stringify(data[1]['id']);
		document.getElementById("elem3").innerHTML = JSON.stringify(data[1]['type']);
		document.getElementById("elem4").innerHTML = JSON.stringify(data[1]['color']);
		document.getElementById("elem5").innerHTML = 'Objeto JSON: ' + JSON.stringify(data[1]);
	})
	.catch(error=>console.log(err));
}