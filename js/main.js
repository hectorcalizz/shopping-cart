// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())

  $(document).ready(function(){

    const $content = $('.col-8');

    $(".btn1").click(function(){
      $("p").fadeOut();
    });
    $(".btn2").click(function(){
      $("p").fadeIn();
    });
  });



  $(document).ready(function(){
    $(".total").mouseenter(function(){
      alert("Price is exclusive of tax.");
    });
  });
        
  $(document).ready(function(){
    $(".header").on("click", function(){
      $(this).hide();
    });
  });

  $(document).ready(function(){
    $("button").click(function(){
      $("h1").fadeTo(1000, 0.4);
    });
  });