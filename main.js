// import './style.scss'
$('.menu-toggle').click(function() {

    /*--------------------------------------------------------------*/
    /*open-close Navigation menu btn, 500 milliseconds to drop-close*/
    /*--------------------------------------------------------------*/
    $('.nav-list').toggleClass('nav-list-open', 500);
        
    /*-------------------------------------------------------------*/
    /* changes hamburger to red X for close button .open CSS       */
    /*-------------------------------------------------------------*/
    $(this).toggleClass('open');

  })

//   function myFunction() {
//     var element = document.getElementById("nl");
//     element.classList.toggle("active");
//     if(nl.classList.display === 'none'){
//       nl.classList.display = 'block';
//  }
// }

