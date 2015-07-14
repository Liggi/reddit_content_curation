var RED = window.RED || {};
$(function(){

  RED.$window = $(window);

  RED.config.init(function(data){
    RED.loadPosts.init(data);
  });

  RED.scrollEvent.init();

});