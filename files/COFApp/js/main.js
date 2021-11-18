// ACLARACIÓN -> A PARTIR DE LA LÍNEA 975 INICIA EL CÓDIGO PARA LAS PANTALLAS DE
// LA ETAPA 6. PREVIO A ESO HAY CÓDIGO GENERAL PARA LAS ANTERIORES ETAPAS
// EL CUAL PUEDE SER REUSADO EN CUALQUIER PANTALLA UTILIZANDO LAS CLASES CORRESPONDIENTES
// Y LEYENDO LAS INSTRUCCIONES EN LA DOCUMENTACIÓN

(function () {
	  /* Activar el boton Registrarme cuando se clickea checkbox */
  $("form input[type='checkbox']").change(function () {
    $('#registrarme').toggleClass('disabled');
  });
  $("#show_hide_password .btn").on('click', function(event) {
    event.preventDefault();
    if($('#show_hide_password input').attr("type") == "text"){
      $('#show_hide_password input').attr('type', 'password');
      $('#show_hide_password .btn span.eye-splash').removeClass( "d-none" ).addClass( "d-block" );
      $('#show_hide_password .btn span.eye').removeClass( "d-block" ).addClass("d-none");
    }else if($('#show_hide_password input').attr("type") == "password"){
      $('#show_hide_password input').attr('type', 'text');
      $('#show_hide_password .btn span.eye').removeClass( "d-none" ).addClass( "d-block" );
      $('#show_hide_password .btn span.eye-splash').removeClass( "d-block" ).addClass("d-none");
    }
  });
  $("#show_hide_password2 .btn").on('click', function(event) {
    event.preventDefault();
    if($('#show_hide_password2 input').attr("type") == "text"){
      $('#show_hide_password2 input').attr('type', 'password');
      $('#show_hide_password2 .btn span.eye-splash').removeClass( "d-none" ).addClass( "d-block" );
      $('#show_hide_password2 .btn span.eye').removeClass( "d-block" ).addClass("d-none");
    }else if($('#show_hide_password2 input').attr("type") == "password"){
      $('#show_hide_password2 input').attr('type', 'text');
      $('#show_hide_password2 .btn span.eye').removeClass( "d-none" ).addClass( "d-block" );
      $('#show_hide_password2 .btn span.eye-splash').removeClass( "d-block" ).addClass("d-none");
    }
  });
  var campoNumerico = $('input[type="number"]');
  // permite solo números, punto o coma
  $(campoNumerico).keypress(function (event) {
    var inputValue = event.which;
    if (
      !(
        (inputValue >= 48 && inputValue <= 57) ||
        inputValue == 190 ||
        inputValue == 188
        )
      ) {
      return false;
  }
});
})();