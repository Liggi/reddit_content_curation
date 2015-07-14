;$(function(){
  'use strict';

  $.fn.inView = function(params){
    var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
        ie = navigator.userAgent.toLowerCase().indexOf('msie') > -1,
        ie11 = navigator.userAgent.toLowerCase().indexOf('rv:11') > -1,
        els = $(this),
        $window = $(window),
        $body = firefox || ie || ie11 ? $('html') : $('body'),
        defaults = {
          position: 'bottom-bottom',
          activeClass: 'active',
          triggerEvent: 'in-view'
        };

    var options = $.extend(defaults, params);

    els.each(function(){
      var element = $(this);
      element.data('in-view', false);
    });

    window.inViewUpdate = function(){
      els.each(function(){
        var element = $(this),
            offset = element.offset(),
            elHeight = element.height(),
            elWidth = element.width(),
            position = element.attr('data-position') || options.position,
            query = inViewCheck(offset, elHeight, elWidth, position);

        element.toggleClass(options.activeClass, query);
        
        if(options.triggerEvent){
          if(!element.data('in-view')){
            if(query){
              element.data('in-view', true);
              element.trigger(options.triggerEvent);
            }
          }
        }
      });
    };

    function inViewCheck(offset, elHeight, elWidth, position){
      var windowWidth = $window.width(),
          windowHeight = $window.height();
      
      var scrollLeft = $body.scrollLeft(),
          scrollCenter = ($body.scrollLeft() + (windowWidth / 2)),
          scrollRight = (scrollLeft + windowWidth),
          scrollTop = $body.scrollTop(),
          scrollMiddle = (scrollTop + (windowHeight / 2)),
          scrollBottom = (scrollTop + windowHeight);

      var elBottom = (offset.top + elHeight),
          elMiddle = (offset.top + (elHeight / 2));

      switch(position){
        case 'top-top':
          return (offset.top < scrollTop);
          break;

        case 'top-middle':
          return (offset.top < scrollMiddle);
          break;

        case 'bottom-bottom':
          return (elBottom < scrollBottom);
          break;

        case 'top-bottom':
          return (offset.top < scrollBottom);
          break;

        case 'middle-bottom':
          return (elMiddle < scrollBottom);
          break;

        case 'middle-middle':
          return (elMiddle < scrollMiddle);
          break;

        case 'left-right':
          return (offset.left < scrollRight);
          break;

        case 'right-right':
          return ((offset.left + elWidth) < scrollRight);
          break;

        case 'left-right-top-bottom':
          return (offset.left < scrollRight && offset.top < scrollBottom);
          break;

        case 'left-right-bottom-bottom':
          return (offset.left < scrollRight && (offset.top + elHeight) < scrollBottom);
          break;
        default:
          return customPosition();
      }

      function customPosition(){
        var splitPos = position.split('-');

        if(splitPos[0] === 'left'){
          var custom = (offset.left + parseInt(splitPos[1]));
          return (scrollLeft > custom);
        } else if(splitPos[0] === 'top'){
          var custom = (offset.top + parseInt(splitPos[1]));
          return (scrollTop > custom);
        }
      }
    };

    window.inViewUpdate();
  };
}(jQuery));