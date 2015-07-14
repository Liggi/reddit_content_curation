var RED = window.RED || {};
RED.scrollEvent= function(){
  function init(){

    RED.$window.on('scroll', function(){
      if(window.inViewUpdate){
        window.inViewUpdate();
      }
    });

  }

  return {
    init: init
  }
}();