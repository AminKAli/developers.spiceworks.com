(function() {
  (function($) {
    return developers.support = {
      faq: {
        init: function() {
          return $('.faq').children('li').click(function() {
            return $(this).toggleClass('on');
          });
        }
      }
    };
  })(jQuery);

}).call(this);
