/*jslint browser:true, white:true,  devel: true*/
/*global $ */
(function(){

  "use strict";
  var $crible;

  function masqueMultiple() {

    var $ref = $(this),
        nbRef = $ref.text();
    console.log(this);
    $ref.addClass('active');
    console.log(nbRef);



    //chaque case

    $('#crible .number').each(function(){

      var $newRef = $(this),
          newNbRef = $newRef.text();
      // je recupere le numero

      // je fat % avec la case de début
      if(newNbRef !== nbRef){
        // si =0  on cache
        if(newNbRef % nbRef === 0){
          $newRef.toggle('hidden');
        }
      }

    });






    }

  function initialise() {
    console.log("initialise ");
    var i;
    $crible = $('#crible');

    for (i = 1; i < 101 ; i+=1){

      $('<div></div>')
        .addClass('number')
        .text(i)
        .appendTo($crible);
      }
  }

  function attache(){
    console.log("attache ");
    $('#crible .number').click(masqueMultiple);
  }


  $(document).ready(function () {
    initialise();
    attache();
  });



}());
