$(function() {

  $('body').on('mousewheel DOMMouseScroll', function(event) {
    var $this = $(this);

    if(event.originalEvent.deltaY !== 0) {
      event.preventDefault();
      $this.scrollLeft($this.scrollLeft() + event.originalEvent.deltaY);
    }

  });

});