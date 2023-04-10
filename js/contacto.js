/* FORMULARIO */
$(function() {
    $("form[name='formularioContacto']").validate({
      rules: {
        nombre: "required",
        mail: {
          required: true,
          email: true
        },
        mensaje: "required"
      },
      messages: {
        nombre: "Por favor, introduzca su nombre",
        mail: "Por favor, introduce un correo electrónico válido",
        mensaje: "Por favor, introduce un mensaje"
      },
      submitHandler: function(form) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Mensaje recibido!',
            text: 'Lo contactaré en breve',
            footer: '<div id="cuenta-regresiva">',
            didOpen: () => {
                simplyCountdown('#cuenta-regresiva', {
                    year: 2023,
                    month: 7,
                    day: 1,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    words: {
                        days: { singular: 'dia', plural: 'dias' },
                        hours: { singular: 'hora', plural: 'horas' },
                        minutes: { singular: 'minuto', plural: 'minutos' },
                        seconds: { singular: 'segundo', plural: 'segundos' }
                    },
                    plural: true, 
                    inline: true, 
                    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
                    // in case of inline set to false
                    enableUtc: true,
                    onEnd: function () {
                        // your code
                        return;
                    },
                    refresh: 1000, 
                    sectionClass: 'simply-section',
                    amountClass: 'simply-amount',
                    wordClass: 'simply-word',
                    zeroPad: false,
                    countUp: false,
               });
              },
            showConfirmButton: true
        }).then((result) => {
            form.submit();
        });
      }
    });
});

 /* CUENTA REGRESIVA */
 simplyCountdown('#cuenta-regresiva', {
     year: 2023,
     month: 7,
     day: 1,
     hours: 0,
     minutes: 0,
     seconds: 0,
     words: {
         days: { singular: 'dia', plural: 'dias' },
         hours: { singular: 'hora', plural: 'horas' },
         minutes: { singular: 'minuto', plural: 'minutos' },
         seconds: { singular: 'segundo', plural: 'segundos' }
     },
     plural: true, 
     inline: true, 
     inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
     // in case of inline set to false
     enableUtc: true,
     onEnd: function () {
         // your code
         return;
     },
     refresh: 1000, 
     sectionClass: 'simply-section',
     amountClass: 'simply-amount',
     wordClass: 'simply-word',
     zeroPad: false,
     countUp: false,
});
