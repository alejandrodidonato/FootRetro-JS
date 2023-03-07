'use strict';

/*
 *	Di Donato, Alejandro
 */

const d = document;
const body = document.body;

let aProvincias = ['Buenos Aires', 'Capital Federal', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'];

let aTarjetas = ['Visa', 'Mastercard', 'AMEX'];

let aCuotas = ['1', '3', '6', '12', '18', '24'];

let aProductos = [
	{
		nombre: 'River Plate 1986',
		imagen: 'river-retro-1.png',
		descripcion: 'En 1986 River Plate ganó su primera CONMEBOL Libertadores e inauguró su primer grito de ¡dale campeón! Luego de perder las finales de 1966 y 1976, finalmente lo consiguió tras ganar ante América de Cali. Detrás de este logro, aparece Héctor Veira.',
		precio: 7500,
		cantidad: 1,
		subtotal: 7500,
	},
	{
		nombre: 'Boca Juniors 1992',
		imagen: 'boca-retro-1.png',
		descripcion: 'El 20 de diciembre de 1992, Boca Juniors empata con gol de Benetti 1 a 1 con San Martin de Tucumán y se consagra campeón del Torneo Apertura 1992. Hacía once años que no daba la vuelta.',
		precio: 7500,
		cantidad: 1,
		subtotal: 7500,
	},
	{
		nombre: 'San Lorenzo 1988',
		imagen: 'casla-retro-1.png',
		descripcion: 'En 1988, el San Lorenzo de Veira juega la Libertadores y llega a semifinales.',
		precio: 5000,
		cantidad: 1,
		subtotal: 5000,
	},
	{
		nombre: 'Independiente 1978',
		imagen: 'rojo-retro-1.png',
		descripcion: 'El 25 de enero de 1978 quedó marcado a fuego en la historia de los diablos rojos de Avellaneda cuando el conjunto dirigido por José Omar Pastoriza se consagraba campeón del Nacional en un partido épico.',
		precio: 5000,
		cantidad: 1,
		subtotal: 5000,
	},
	{
		nombre: 'Racing 1988',
		imagen: 'racing-retro-1.png',
		descripcion: 'El 18 de junio de 1988 Racing se consagró campeón de la Supercopa. Aquel equipo de Alfio Basile fue el primer campeón Sudamericano.',
		precio: 5000,
		cantidad: 1,
		subtotal: 5000,
	},
	{
		nombre: 'Real Madrid 1960',
		imagen: 'real-retro-1.png',
		descripcion: 'Por quinta vez consecutiva, el Real Madrid se proclamó campeón de la Copa de Campeones de Europa tras derrotar en Glasgow al Eintracht Fráncfort alemán. La final fue décadas después considerada como la mejor de todas las disputadas a lo largo de su historia, merced no solo al resultado por 7-3 —récord anotador de todas las finales—, sino por la superioridad mostrada por el conjunto español que le valió elogios y un gran reconocimiento por parte de medios, aficionados y equipos rivales alrededor de toda Europa.',
		precio: 10000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Barcelona 2002',
		imagen: 'barsa-retro-1.png',
		descripcion: 'Se ficha a jugadores como Ronaldinho,3​ Eto´o y Deco y el equipo, entrenado por Frank Rijkaard, consigue ganar dos ligas españolas consecutivas y una Liga de Campeones, y la masa social del club supera por primera vez en la historia la cifra de los 140.000 socios.',
		precio: 10000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Juventus 1985',
		imagen: 'juve-retro-1.png',
		descripcion: 'En la temporada del 85, la Juventus obtuvo la Supercopa de Europa en Turín, con marcador de 2:0 frente al Liverpool (16 de enero de 1985),39​ y la Copa de Europa en Bruselas el 29 de mayo, por 1:0 ante el mismo rival,40​ con el cual el club se consagró como el primero en la historia del fútbol europeo en conquistar las tres principales competiciones organizadas por la UEFA.',
		precio: 12000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Milan 1987',
		imagen: 'milan-retro-1.png',
		descripcion: 'Si en el caso del FC Barcelona de Pep Guardiola hablábamos de que se distinguió por su juego y en el del Real Madrid por sus estelares incorporaciones, en el Milan de Sacchi encontramos una mezcla de ambos. En San Siro se concentraron una pléyade de enormes futbolistas, en su mayoría llegados de fuera del club, dirigidos por un técnico que imprimió una forma de jugar muy peculiar y extraña en Italia.',
		precio: 12000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Bayern Munich 1976',
		imagen: 'bayern-retro-1.png',
		descripcion: 'El 12 de mayo de 1976, el Bayern entró en el privilegiado círculo de los tricampeones de Europa. Este mismo día, con una victoria por 1-0 en la final contra el St. Etienne, el FCB se hacía con el título más importante a nivel de clubes por tercera vez de forma consecutiva.',
		precio: 12000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Argentina 1978',
		imagen: 'argentina-retro-1.png',
		descripcion: 'El partido decisivo entre Argentina y los Países Bajos se disputó en Buenos Aires en el Estadio Monumental, el 25 de junio de 1978. A los 38 de juego Mario Kempes ponía el 1-0, pero a pocos minutos de que la final terminara Dick Nanninga marcó el tanto neerlandés lo que hizo que se disputara un tiempo suplementario. Al minuto 105 volvió a marcar Mario Kempes y selló el resultado Daniel Bertoni a los 116. La Selección de fútbol de Argentina consiguió de esta manera su primera Copa Mundial de fútbol.',
		precio: 15000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Alemania 1990',
		imagen: 'alemania-retro-1.png',
		descripcion: 'Alemania salió campeón de la Copa del Mundo por tercera vez en 1990. Se cobró la revancha al ganarle en la final a Argentina de Diego Armando Maradona.',
		precio: 15000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Holanda 1974',
		imagen: 'holanda-retro-1.png',
		descripcion: 'En el verano europeo de 1974 arrancó el Mundial de Alemania, pero este sería un mundial que marcaría un nuevo concepto de “fútbol total” y quedaría en la memoria de los aficionados del fútbol para siempre. La famosa Naranja Mecánica fue pionera de un sistema de juego que consistía en que ningún jugador tenía una posición definida, sino que estas se ocupaban por otro compañero, dependiendo las circunstancias del partido.',
		precio: 15000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'URSS 1990',
		imagen: 'urss-retro-1.png',
		descripcion: 'La URSS contaba en sus filas a un equipo que hubiera enorgullecido al mismísimo Valeri Lobanovski. Las estrellas eran Mostovói, que ya era titular en el Spartak; Andréi Kanchelskis, que ficharía poco después por el Manchester United; e Ígor Shalímov, que acabaría recalando en el Inter de Milán.',
		precio: 15000,
		cantidad: 1,
		subtotal: 10000,
	},
	{
		nombre: 'Brasil 1970',
		imagen: 'brasil-retro-1.png',
		descripcion: 'Aquel Brasil campeón mundial de 1970 fue mucho más que la mejor selección de todos los tiempos. También resultó la consagración de la fabulosa cultura brasileña de los años ‘60. Vinicius, Tom Jobim, Joao Gilberto, Chico Buarque y Caetano, la bossa, el samba y el Cinema Novo dieron la vuelta olímpica del brazo de Pelé aquella imborrable tarde del 21 de junio de 1970.',
		precio: 20000,
		cantidad: 1,
		subtotal: 10000,
	},
];


//Creacion elementos MODAL

let modal = d.createElement('div');
modal.setAttribute('id', 'modalProducto');
modal.setAttribute('class', 'modal');

let btn_cerrar = d.createElement('a');
btn_cerrar.setAttribute('href','javascript:void(0)');

let i_cerrar = d.createElement('i');
i_cerrar.setAttribute('class', 'fas fa-times');

btn_cerrar.appendChild(i_cerrar);

let descripcion = d.createElement('p');



//Creacion elementos MINICARRITO

let enlace_carrito = d.createElement('a');
enlace_carrito.setAttribute('href','javascript:void(0)');
let div_minicarrito = d.createElement('div');
div_minicarrito.setAttribute('id', 'minicarrito');
let campo_items = d.createElement('p');
campo_items.innerHTML = 'Camisetas en el carrito: ';
let campo_total = d.createElement('p');
campo_total.innerHTML = 'Total: $';
let valor_items = d.createElement('span');
valor_items.innerHTML = 0;
let valor_total = d.createElement('span');
valor_total.innerHTML = 0;
let img_carrito = d.createElement('img');
img_carrito.setAttribute('class', 'carrito');
img_carrito.setAttribute('src', 'img/carrito.png');
img_carrito.setAttribute('alt', 'Carrito de compras');

//Creacion elementos CARRITO


let boton_vaciar = d.createElement('button');
boton_vaciar.innerHTML = 'Vaciar carrito';
boton_vaciar.setAttribute('class', 'vaciar');

let boton_checkout = d.createElement('button');
boton_checkout.innerHTML = 'Finalizar compra';
boton_checkout.setAttribute('class', 'finalizar');

let p_total = d.createElement('h4');
let total = 0;

let div_btn_regreso = d.createElement('div');
div_btn_regreso.setAttribute('class', 'regreso col-lg-3');

let img_vacio = d.createElement('img');

img_vacio.setAttribute('src', 'img/carritoVacio.png');
img_vacio.setAttribute('alt', 'Carrito vacio');

let boton_regreso = d.createElement('button');
boton_regreso.setAttribute('class', 'btn-regreso');

boton_regreso.innerHTML = 'Volver al catálogo';


let div_botonera = d.createElement('div');
div_botonera.setAttribute('class', 'col-lg-2');
let atras = d.createElement('button');

let i_atras = d.createElement('i');
i_atras.setAttribute('class', 'fas fa-arrow-left');



let h2 = d.createElement('h2');
h2.innerHTML = 'TU CARRITO ESTÁ VACIO';


let productos_carrito = [];

//Creacion elementos CHECKOUT

let checkout = d.createElement('div');
checkout.setAttribute('id', 'checkout');

let div_checkout = d.createElement('div');
div_checkout.setAttribute('class', 'col-lg-9');

let titulo_checkout = d.createElement('h2');
titulo_checkout.innerHTML = 'CHECKOUT';

let total_checkout = d.createElement('p');


//FORMULARIO

let form = d.createElement('form');
form.setAttribute('class', 'formulario');

let fieldset_datos = d.createElement('fieldset');
fieldset_datos.style.width = '50%';

let legend_datos = d.createElement('legend');
legend_datos.innerHTML = 'Datos del cliente';

let div_form_group = d.createElement('div');
div_form_group.className = 'col-lg-12';

//CAMPO NOMBRE

let label_nombre = d.createElement('label');
label_nombre.innerHTML = 'Nombre';

let div_input_nombre = d.createElement('div');

let input_nombre = d.createElement('input');
input_nombre.setAttribute('type', 'text');
input_nombre.setAttribute('name', 'nombre');
input_nombre.required = true;
input_nombre.className = 'form-control';

//CAMPO APELLIDO

let label_apellido = d.createElement('label');
label_apellido.innerHTML = 'Apellido';

let div_input_apellido = d.createElement('div');

let input_apellido = d.createElement('input');
input_apellido.setAttribute('type', 'text');
input_apellido.setAttribute('name', 'apellido');
input_apellido.required = true;
input_apellido.className = 'form-control';

//CAMPO TELEFONO

let label_telefono = d.createElement('label');
label_telefono.innerHTML = 'Teléfono';

let div_input_telefono = d.createElement('div');

let input_telefono = d.createElement('input');
input_telefono.setAttribute('type', 'number');
input_telefono.setAttribute('name', 'telefono');
input_telefono.required = true;
input_telefono.setAttribute('pattern', '[0-9]{9}');
input_telefono.className = 'form-control';



//CAMPO EMAIL

let label_email = d.createElement('label');
label_email.innerHTML = 'Email';

let div_input_email = d.createElement('div');

let input_email = d.createElement('input');
input_email.setAttribute('type', 'email');
input_email.setAttribute('name', 'email');
input_email.required = true;
input_email.setAttribute('pattern', '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
input_email.className = 'form-control';


//CAMPO DIRECCION

let label_dir = d.createElement('label');
label_dir.innerHTML = 'Dirección de entrega';

let div_input_dir = d.createElement('div');

let input_dir = d.createElement('input');
input_dir.required = true;
input_dir.setAttribute('type', 'text');
input_dir.setAttribute('name', 'direccion');

input_dir.className = 'form-control';


//CAMPO PROVINCIA

let div_select = d.createElement('div');

let label_select_prov = d.createElement('label');

let select_prov = d.createElement('select');
label_select_prov.innerHTML = 'Provincia';
select_prov.name = 'prov';


let option_prov; 

for (let prov of aProvincias) {
	option_prov = d.createElement('option');
	option_prov.value = prov;
	option_prov.innerHTML = prov;
	select_prov.appendChild(option_prov);
}

//CAMPO FECHA DE ENTREGA

let label_fecha = d.createElement('label');
label_fecha.innerHTML = 'Fecha de entrega';

let div_input_fecha = d.createElement('div');

let input_fecha = d.createElement('input');
input_fecha.setAttribute('type', 'date');
input_fecha.setAttribute('name', 'fecha');
input_fecha.setAttribute('value', '2021-01-02');
input_fecha.setAttribute('min', '2021-01-02');
input_fecha.setAttribute('max', '2021-12-31');


//METODO DE PAGO

let div_select_tarjeta = d.createElement('div');

let label_select_tarjeta = d.createElement('label');

let select_tarjeta = d.createElement('select');

label_select_tarjeta.innerHTML = 'Método de pago';
select_tarjeta.name = 'tarjeta';

//NUMERO DE TARJETA


let label_nro_tarjeta = d.createElement('label');
label_nro_tarjeta.innerHTML = 'Nro de tarjeta';

let div_input_nro_tarjeta = d.createElement('div');

let input_nro_tarjeta = d.createElement('input');
input_nro_tarjeta.setAttribute('type', 'number');
input_nro_tarjeta.required = true;
input_nro_tarjeta.className = 'form-control';

let option_tarjeta; 

for (let tarjeta of aTarjetas) {
	option_tarjeta = d.createElement('option');
	option_tarjeta.value = tarjeta;
	option_tarjeta.innerHTML = tarjeta;
	select_tarjeta.appendChild(option_tarjeta);
}

//CUOTAS

let label_select_cuotas = d.createElement('label');

let select_cuotas = d.createElement('select');
label_select_cuotas.innerHTML = 'Cuotas';
select_cuotas.name = 'cuotas';


let option_cuotas; 

for (let cuotas of aCuotas) {
	option_cuotas = d.createElement('option');
	option_cuotas.value = cuotas;
	option_cuotas.innerHTML = cuotas;
	select_cuotas.appendChild(option_cuotas);
}


//FINALIZAR COMPRA

let div_finalizar = d.createElement('div');

let boton_cancelar = d.createElement('button');
boton_cancelar.className = 'cancelar';
boton_cancelar.innerHTML = 'Cancelar';

let boton_confirmar = d.createElement('input');
boton_confirmar.className = 'confirmar';
boton_confirmar.value = 'Comprar';
boton_confirmar.setAttribute('type', 'submit');






//Busco el nodo padre main
let main = d.querySelector('main');



//Creo el div que va a contener el listado de productos

let div_listado = d.createElement('div');

//Le seteo el ID
div_listado.setAttribute('id', 'productos');



	




function CrearListado()
{	
	//Agrego el div en el main
	main.appendChild(div_listado);


	

//Recorro cada producto del array para agregar su contenido
for (let producto of aProductos)
{

	//Genero el div contenedor del producto
	let div_producto = d.createElement('div');
	


	//Genero la imagen, le seteo la ruta y el alt

	let img = d.createElement('img');

	//Genero el div contenedor del texto y los botones

	let div_txt = d.createElement('div');


	//Genero el H3 y le asigno el nombre del producto

	let nombre_prod = d.createElement('h3');

	//Genero el parrafo con el precio

	let p = d.createElement('p');

	let precio = d.createElement('span');

	//Genero los botones

	let btn_agregar = d.createElement('button');
	let btn_ampliar = d.createElement('button');

	img.setAttribute('src', 'img/' + producto.imagen);

	img.setAttribute('alt', producto.nombre);

	

	nombre_prod.innerHTML = producto.nombre;



	p.innerHTML = 'Precio: ';

	

	precio.innerHTML = '$' + producto.precio;


	btn_ampliar.innerHTML = 'Ver producto';
	btn_agregar.innerHTML = 'Agregar al carrito';

	//Funcion para agregar productos al carrito

	

	btn_agregar.onclick = function Agregar()
	{
		let cantidad = parseInt(valor_items.innerHTML);

		if (!cantidad)
		{

			let h2 = d.querySelectorAll('h2');

			main.insertBefore(enlace_carrito, h2[1]);

			enlace_carrito.appendChild(div_minicarrito);
			

			div_minicarrito.appendChild(campo_items);

			campo_items.appendChild(valor_items);
			div_minicarrito.appendChild(campo_total);
			campo_total.appendChild(valor_total);
			div_minicarrito.appendChild(img_carrito);

		}

		valor_items.innerHTML = cantidad + 1;

		valor_total.innerHTML = parseInt(valor_total.innerHTML) + producto.precio;

		

		if(!productos_carrito.includes(producto))
		{
			productos_carrito.push(producto);
		}
		else
		{
			producto.cantidad++;
			producto.subtotal += producto.precio;
		}	

		
	}

	//Funcion para abrir la ventana modal con la info del producto

	btn_ampliar.onclick = function Ampliar()
	{

		body.appendChild(modal);
		modal.appendChild(btn_cerrar);

		let img_modal = d.createElement('img');

		img_modal.setAttribute('src', 'img/' + producto.imagen);

		img_modal.setAttribute('alt', producto.nombre);

		let nombre_prod_modal = d.createElement('h3');

		nombre_prod_modal.innerHTML = producto.nombre;

		let p_modal = d.createElement('p');

		p_modal.innerHTML = 'Precio: ';

		let precio_modal = d.createElement('span');

		precio_modal.innerHTML = '$' + producto.precio;

		descripcion.innerHTML = producto.descripcion;



		modal.appendChild(img_modal);

		modal.appendChild(nombre_prod_modal);

		modal.appendChild(p_modal);

		p_modal.appendChild(precio_modal);

		modal.appendChild(descripcion);

		//Funcion para cerrar ventana modal
		btn_cerrar.onclick = function Cerrar()
		{
			modal.remove();
			modal.removeChild(img_modal);
			modal.removeChild(nombre_prod_modal);
			modal.removeChild(p_modal);
			p_modal.removeChild(precio_modal);
			modal.removeChild(descripcion);

		}

	}


	//Agrego el item con todos los elementos

	div_listado.appendChild(div_producto);

	div_producto.appendChild(img);

	div_producto.appendChild(div_txt);

	div_txt.appendChild(nombre_prod);

	div_txt.appendChild(p);

	p.appendChild(precio);

	div_txt.appendChild(btn_agregar);
	div_txt.appendChild(btn_ampliar);


}
}


body.onload = CrearListado();


//Funcion para abrir el carrito con todos los productos agregados

	enlace_carrito.onclick = function VerCarrito()
	{
		
		let carrito = d.createElement('div');
		carrito.setAttribute('id', 'carrito');
		let div_carrito = d.createElement('div');
		div_carrito.setAttribute('class', 'col-lg-9');
		let titulo = d.createElement('h2');
		titulo.innerHTML = 'TU CARRITO';

		let script = d.querySelector('script');
		body.replaceChild(carrito, main);

		carrito.appendChild(div_carrito);

		div_carrito.appendChild(div_botonera);

		div_botonera.appendChild(atras);

		atras.appendChild(i_atras);

		div_carrito.appendChild(titulo);


		total = 0;
		



		for (let producto of productos_carrito)
		{
			

			//Genero el div contenedor del producto
			let div_producto = d.createElement('div');

			div_producto.setAttribute('class', 'row item');

			//Genero la imagen, le seteo la ruta y el alt

			let div_img = d.createElement('div');
			div_img.setAttribute('class', 'col-lg-3');

			let img = d.createElement('img');


			img.setAttribute('src', 'img/' + producto.imagen);

			img.setAttribute('alt', producto.nombre);

			//Genero el div contenedor del texto

			let div_txt = d.createElement('div');
			div_txt.setAttribute('class', 'col-lg-6');

			//Genero el H3 y le asigno el nombre del producto

			let nombre_prod = d.createElement('h3');

			nombre_prod.innerHTML = producto.nombre;


			//Genero el parrafo con el precio

			let p = d.createElement('p');

			p.innerHTML = 'Precio: ';

			let precio = d.createElement('span');

			precio.innerHTML = '$' + producto.precio;

			//Genero el parrafo con la cantidad

			let cantidad = d.createElement('p');
			cantidad.innerHTML = 'Cantidad: ' + producto.cantidad;

			//Genero el parrafo con el subtotal

			let sub = d.createElement('p');
			sub.innerHTML = 'Subtotal: $' + producto.subtotal;

			div_listado.appendChild(div_producto);

			div_carrito.appendChild(div_producto);

			//Genero los botones para sumar, restar y eliminar items

			let div_botones = d.createElement('div');
			div_botones.setAttribute('class', 'col-lg-3');

			let btn_eliminar = d.createElement('button');
			let i_eliminar = d.createElement('i');
			i_eliminar.setAttribute('class', 'fas fa-minus-circle');
		
			

			let btn_sumar = d.createElement('button');
			let i_sumar = d.createElement('i');
			i_sumar.setAttribute('class', 'fas fa-plus-circle');
			
			
			btn_sumar.onclick = function SumarItem()
			{
				producto.cantidad++;

				cantidad.innerHTML = 'Cantidad: ' + producto.cantidad;

				producto.subtotal = producto.precio * producto.cantidad;

				sub.innerHTML = 'Subtotal: $' + producto.subtotal;

				total += producto.precio;

				p_total.innerHTML = 'TOTAL: $' + new Intl.NumberFormat('es-ES').format(total);

				valor_items.innerHTML = parseInt(valor_items.innerHTML) + 1;
				valor_total.innerHTML = total;

			}

			btn_eliminar.onclick = function RestarItem()
			{
				if (producto.cantidad == 1)
				{

					div_carrito.removeChild(div_producto);


					productos_carrito.splice(producto, 1);

				}
				else
				{
					producto.cantidad--;

					cantidad.innerHTML = 'Cantidad: ' + producto.cantidad;

					producto.subtotal = producto.precio * producto.cantidad;

					sub.innerHTML = 'Subtotal: $' + producto.subtotal;

					
				}

				total -= producto.precio;

				valor_items.innerHTML = parseInt(valor_items.innerHTML) - 1;
				valor_total.innerHTML = total;

				if (total != 0)
				{
					p_total.innerHTML = 'TOTAL: $' + new Intl.NumberFormat('es-ES').format(total);
				}
				else
				{
					div_carrito.removeChild(titulo);
					div_carrito.removeChild(p_total);
					div_carrito.removeChild(boton_vaciar);
					div_carrito.removeChild(boton_checkout);

					div_carrito.appendChild(h2);

					div_carrito.appendChild(div_btn_regreso);

					div_btn_regreso.appendChild(img_vacio);


				}



			}

			boton_vaciar.onclick = function VaciarCarrito()
				{
					
					
					div_carrito.remove();
					


					carrito.appendChild(div_botonera);


					div_botonera.appendChild(atras);

					atras.appendChild(i_atras);

					carrito.appendChild(h2);

					carrito.appendChild(div_btn_regreso);
					div_btn_regreso.appendChild(img_vacio);
					


					productos_carrito = [];
					
			
							main.removeChild(enlace_carrito);
				valor_items.innerHTML = 0;
				valor_total.innerHTML = 0;


					
				}

			


			
		total += producto.subtotal;

		p_total.innerHTML = 'TOTAL: $' + new Intl.NumberFormat('es-ES').format(total);




		atras.onclick = function Atras()
		{
			if (total == 0)
			{
				main.removeChild(enlace_carrito);
				valor_items.innerHTML = 0;
				valor_total.innerHTML = 0;
			}

			body.replaceChild(main, carrito);
			main.appendChild(div_listado);
			div_carrito.remove();
			carrito.remove();
			div_producto.remove();
			

		}

		boton_checkout.onclick = function Checkout()
		{
			body.replaceChild(checkout, carrito);
			checkout.appendChild(div_checkout);
			div_checkout.appendChild(titulo_checkout);

			div_checkout.appendChild(form);
			form.appendChild(fieldset_datos);
			fieldset_datos.appendChild(legend_datos);

			fieldset_datos.appendChild(div_form_group);

			div_form_group.appendChild(label_nombre);
			div_form_group.appendChild(div_input_nombre);
			div_input_nombre.appendChild(input_nombre);

			div_form_group.appendChild(label_apellido);
			div_form_group.appendChild(div_input_apellido);
			div_input_apellido.appendChild(input_apellido);

			div_form_group.appendChild(label_telefono);
			div_form_group.appendChild(div_input_telefono);
			div_input_telefono.appendChild(input_telefono);

			div_form_group.appendChild(label_email);
			div_form_group.appendChild(div_input_email);
			div_input_email.appendChild(input_email);

			div_form_group.appendChild(label_dir);
			div_form_group.appendChild(div_input_dir);
			div_input_dir.appendChild(input_dir);

			div_form_group.appendChild(div_select);
			div_select.appendChild(label_select_prov);
			label_select_prov.appendChild(select_prov);

			div_form_group.appendChild(label_fecha);
			label_fecha.appendChild(input_fecha);

			div_form_group.appendChild(div_select_tarjeta);
			div_select_tarjeta.appendChild(label_select_tarjeta);
			label_select_tarjeta.appendChild(select_tarjeta);

			div_form_group.appendChild(label_nro_tarjeta);
			div_form_group.appendChild(div_input_nro_tarjeta);
			div_input_nro_tarjeta.appendChild(input_nro_tarjeta);
			div_input_nro_tarjeta.appendChild(label_select_cuotas);
			label_select_cuotas.appendChild(select_cuotas);


			form.appendChild(div_finalizar);
			div_finalizar.appendChild(boton_cancelar);
			div_finalizar.appendChild(boton_confirmar);


			total_checkout.innerHTML = 'TOTAL: $' + new Intl.NumberFormat('es-ES').format(total);

			div_checkout.appendChild(total_checkout);


			boton_cancelar.onclick = function Cancelar()
			{
				body.replaceChild(carrito, checkout);
			}

			form.onsubmit = function Comprar()
			{
				productos_carrito = [];

			}

			


		}

		
	

		



	div_producto.appendChild(div_img);

	div_img.appendChild(img);

	div_producto.appendChild(div_txt);

	div_txt.appendChild(nombre_prod);

	div_txt.appendChild(p);

	p.appendChild(precio);

	div_txt.appendChild(cantidad);

	div_txt.appendChild(sub);

	div_producto.appendChild(div_botones);

	div_botones.appendChild(btn_sumar);
	btn_sumar.appendChild(i_sumar);

	div_botones.appendChild(btn_eliminar);
	btn_eliminar.appendChild(i_eliminar);

	

		}


		//Genero el precio total

		

		

		

		div_carrito.appendChild(boton_vaciar);
		div_carrito.appendChild(boton_checkout);
		
		div_carrito.appendChild(p_total);



		

	}













