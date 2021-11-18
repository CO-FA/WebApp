$.validator.addMethod(
	'strongPassword',
	function (value, element) {
		return this.optional(element) || /^[a-z]{4}\d{4}$/i.test(value);
	},
	'La contraseña debe tener 8 caracteres que contengan 4 letras y 4 números.'
);
$().ready(function () {
	jQuery.extend(jQuery.validator.messages, {
		required: "Este campo es obligatorio.",
		remote: "Por favor, rellena este campo.",
		email: "Por favor, escribe una dirección de correo válida",
		url: "Por favor, escribe una URL válida.",
		date: "Por favor, escribe una fecha válida.",
		dateISO: "Por favor, escribe una fecha (ISO) válida.",
		number: "Por favor, escribe un número entero válido.",
		digits: "Por favor, escribe sólo dígitos.",
		creditcard: "Por favor, escribe un número de tarjeta válido.",
		equalTo: "Por favor, escribe el mismo valor de nuevo.",
		accept: "Por favor, escribe un valor con una extensión aceptada.",
		maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
		minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
		rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
		range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
		max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
		min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
	});
	$('form').each(function () {
		$(this).validate({
			errorClass: "is-invalid",
			validClass: "is-valid",
			rules: {
				clienteDocNumero: {
					required: true,
					minlength: 8,
					maxlength: 8,
				},
				clienteCelNumero: {
					required: true,
					minlength: 6,
					maxlength: 8,
					//customphone: true,
				},
				clienteCelCodigo: {
					required: true,
					minlength: 2,
					maxlength: 4,
				},
				clientePin: {
					required: true,
					maxlength: 4,
				},
				clienteDireccion: {
					required: true
				},
				clienteCP: {
					required: true,
					maxlength: 4
				},
				clienteDireccionNumero: {
					required: true,
					maxlength: 8,
				},
				clientePass: {
					required: true,
					maxlength: 8,
					minlength: 8,
					strongPassword: true
				},
				clientePassConfirm: {
					equalTo: '#clientePass'
				},
				clientePassNew: {
					required: true,
					maxlength: 8,
					minlength: 8,
					strongPassword: true
				},
				clientePassNewConfirm: {
					equalTo: '#clientePassNew'
				},
				clienteEmail: {
					email: true,
				},
				cienteGender: 'required',
			},
			messages: {
				clienteDocNumero: {
					required: 'Por favor ingrese su DNI',
					minlength: 'Por favor ingrese un DNI válido',
					maxlength: 'Por favor ingrese un DNI válido',
				},
				clienteCelNumero: {
					required: '*Por favor ingrese su celular',
					minlength: '*El número ingresado es incorrecto',
					maxlength: '*El número ingresado es incorrecto',
				},
				clienteCelCodigo: {
					required: '*Por favor ingrese su código de área',
					minlength: '*El código de área ingresado es incorrecto',
					maxlength: '*El código de área ingresado es incorrecto',
				},
				clientePin: {
					required: '*Por favor ingrese PIN SMS incorrecto',
					minlength: '*PIN SMS incorrecto',
					maxlength: '*PIN SMS incorrecto'
				},
				clienteDireccion: {
					required: '*Por favor ingrese su dirección'
				},
				clienteDireccionNumero: {
					required: '*Por favor ingrese un número correcto incorrecto',
					maxlength: '*Número incorrecto'
				},
				clienteCP: {
					required: '*Por favor ingrese un código postal correcto incorrecto',
					maxlength: '*Número incorrecto'
				},
				clientePass: {
					required: '*Por favor ingrese una contraseña',
					minlength: '*la contraseña debe tener 8 caracteres',
					maxlength: '*la contraseña debe tener 8 caracteres',
					strongPassword: "Ingrese una contraseña válida",
				},
				clientePassConfirm: {
					equalTo : 'La contraseña no es igual'
				},
				clientePassNew: {
					required: '*Por favor ingrese una contraseña',
					minlength: '*la contraseña debe tener 8 caracteres',
					maxlength: '*la contraseña debe tener 8 caracteres',
					strongPassword: "Ingrese una contraseña válida",
				},
				clientePassNewConfirm: {
					equalTo : 'La contraseña no es igual'
				},
				clienteEmail: {
					email: '*Email incorrecto',
					required: '*Por favor ingrese su email',
				},
				cienteGender: 'Seleccionne un género',
				clienteNombres: 'Seleccionar una opción'
			},
			errorElement: 'span',
			errorPlacement: function (err, elem) {
				switch (elem.attr('name')) {
					case 'clienteDocNumero':
					$('#clienteDocNumero-errorMsg').html(err);
					break;

					case 'clienteEmail':
					$('#clienteEmail-errorMsg').html(err);
					break;

					case 'cienteGender':
					$('#cienteGender-errorMsg').html(err);
					break;

					case 'clienteNombres':
					$('#clienteNombres-errorMsg').html(err);
					break;

					case 'clienteCelNumero':
					$('#clienteCelNumero-errorMsg').html(err);
					break;

					case 'clienteCelCodigo':
					$('#clienteCelCodigo-errorMsg').html(err);
					break;

					case 'clientePin':
					$('#clientePin-errorMsg').html(err);
					break;

					case 'clienteDireccion':
					$('#clienteDireccion-errorMsg').html(err);
					break;

					case 'clienteDireccionNumero':
					$('#clienteDireccionNumero-errorMsg').html(err);
					break;

					case 'clienteCP':
					$('#clienteCP-errorMsg').html(err);
					break;

					case 'clientePass':
					$('#clientePass-errorMsg').html(err);
					break;

					case 'clienteNew':
					$('#clienteNew-errorMsg').html(err);
					break;

					case 'clientePassConfirm':
					$('#clientePassConfirm-errorMsg').html(err);
					break;

					case 'clientePassNewConfirm':
					$('#clientePassNewConfirm-errorMsg').html(err);
					break;

					// case 'numeroRemito':
					// 	$('#numeroRemito-errorMsg').html(err);
				}
			},
		});
	})
    $('form input, form label').on('keyup blur click', function () { // fires on every keyup & blur
        if ($('form').valid()) {                   // checks form for validity
            $('button.btn.cont').prop('disabled', false);        // enables button
          } else {
            $('button.btn.cont').prop('disabled', 'disabled');   // disables button
          }
    });
});
