$(document).ready(function() {
    $("#form-register").validate({
      rules: {
        nombre : {
          required: true,
          minlength: 15
        },
        edad: {
          required: true,
          number: true,
          min: 18
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#edad").val() > 35
            }
          },
          number: true,
          min: 0
        }
      }
    });
  });