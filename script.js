// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NÚMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR EL RESULTADO
function puntoUno(x,z){
	let resultados
	x=13
	z=451
	if(x<z){
		resultados = z/x
	} else{ 
		resultados = x*z
	}

	return resultados
}
console.log(puntoUno())


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)
function puntoDos(a){
	a="Diciembre 19"
	return typeof(a)
}
console.log(puntoDos())


// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN
function puntoTres(a,b,c,d,e,f){
	a=29; b=10; c=15; d=3; e=4; f=2;
	let resultadosuma= a+b; let resultadoresta= resultadosuma-c; let producto= resultadoresta*d; let divi = producto/e;
	let potencia = divi**f;

	return potencia
}
console.log(puntoTres())


// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
function puntoCuatro(array){
	array = [1,2,3,4,5,6,7,8,9]
	let arreglo2 = []
	arreglo2.push(array[array.length-3])
	arreglo2.push(array[array.length-2])
	arreglo2.push(array[array.length-1])
	return arreglo2
}
console.log(puntoCuatro())


// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
function puntoCinco(array){
	array = ["pan","queso","agua","ipf"]
	console.log(`Array sin ordenar: ${array}`)
	array.sort() //sirve para ordenar alfabeticamente o de menor a mayor un arreglo
	return array
}
console.log(puntoCinco())


// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

function puntoSeis(a,b){
	a=[1,3,5,7,1,9,1,11,1,13,1,15]
	console.log(a)
	b=1

	return a.filter(valor=>(valor !=b))
}
console.log(puntoSeis())

// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function puntosiete(a){
	a=[19,24,5,10,15]
	//El let i = 0 inicializa la variable del contador en 0, el i<a.length le dice al for que el contador debe ser menor
	//que el tamaño del arreglo, y el "i++" indica que el indice se irá sumando de uno en uno hasta llegar al límite
	let suma=0; let prom=0;
	function sumado(a){
		for (let i = 0; i<a.length;i++){
			suma+=a[i]
		}
		return suma
	}console.log(sumado(a))
	function promedio(a){
		prom=(sumado(suma)/(a.length))
		return prom
	} console.log(promedio(a))
}
console.log(puntosiete())
// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

function puntoOcho({}, str){

	return
}

// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

function ________({}){

	return
}