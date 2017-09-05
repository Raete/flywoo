String.prototype.capitalize = function() { 
  return this.charAt(0).toUpperCase() + this.slice(1);
};

(function($) {
   // fly animation
   // 
$('.flight-woo').addClass("hidden").viewportChecker({
        classToAdd: 'visible fadeInDown', 
        offset: 100
});
})(jQuery);

