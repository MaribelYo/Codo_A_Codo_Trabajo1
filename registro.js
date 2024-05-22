
$(document).ready(function() {
  $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      e.stopPropagation();
  });

  $('html').click(function(){
      $('.nav-dropdown').hide();
  })
  $('#nav-toggle').click(function(){
      $('nav ul').slideToggle();
  })
  $('#nav-toggle').on('click', function(){
      this.classList.toggle('active');
  });
});












//////registro
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });


// Validación de formulario de inicio de sesión
$('#login-form').on('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  var username = $('#username').val();
  var password = $('#password').val();

  // Expresión regular para validar el correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Expresión regular para validar la contraseña (alfanumérica, longitud máxima de 15 caracteres)
  var passwordRegex = /^[a-zA-Z0-9]{1,15}$/;

  if (!emailRegex.test(username)) {
    alert('Por favor, ingrese un correo electrónico válido.');
  } else if (!passwordRegex.test(password)) {
    alert('La contraseña debe ser alfanumérica y tener como máximo 15 caracteres.');
  } else {
    // Lógica para iniciar sesión o realizar la acción correspondiente
    alert('Inicio de sesión exitoso');
    // Aquí podrías redirigir a otra página o realizar una acción
  }
});