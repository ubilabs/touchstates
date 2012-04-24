$.extend($.fn, {
  
  touchStates: function(selector){
    
    var $body = $(document.body),
      $container = $(this);
    
    function coords(event){
      event = event.originalEvent;
      
      return {
        x: event.touches ? event.touches[0].clientX : event.clientX,
        y: event.touches ? event.touches[0].clientY : event.clientY
      };
    }
    
    function start(event){
 
      var $elem = $(event.currentTarget),
        startPos = coords(event),
        timer;

      timer = setTimeout(function(){
        $elem.addClass("active");
      }, 100);
      
      function end(){
        clearTimeout(timer);
        
        $body.unbind('touchend', end);
        $body.unbind('mouseup', end);

        $body.unbind('touchmove', move);
        $body.unbind('mousemove', move);
        
        $elem.removeClass("active");
      }
      
      function move(event){
        var currentPos = coords(event);
        
        if (
          Math.abs(currentPos.x - startPos.x) > 10 ||
          Math.abs(currentPos.y - startPos.y) > 10
        ) {
          end();
        }
      }
      
      $body.bind('touchend', end);
      $body.bind('mouseup', end);
      
      $body.bind('touchmove', move);
      $body.bind('mousemove', move);
    }
    
    $container.delegate(selector, "mousedown", start);
    $container.delegate(selector, "touchstart", start);
  }
});