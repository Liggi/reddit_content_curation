var RED = window.RED || {};
RED.config = function(){
  function init(callback){
    $.ajax({
      url: 'app/javascripts/config.json',
      datatype: 'json',
      success: function(result){
        callback(result.data);
      }
    })
  }

  return {
    init: init
  }
}();