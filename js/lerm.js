/**
 *
 * @author Lerm
 * @link   http://lerm.net
 * @date   2018-07-14
 */
$(function() {
    $('.entry img').each(function(i) {
        if (this.parentNode.href == null) {
            $(this).wrap("<a href='" + this.src + "'  class='col-4' data-toggle='lightbox' data-gallery='gallery'></a>");
        } else {
            $(this).parent().attr({'href':this.src, 'data-toggle': 'lightbox', 'data-gallery':'entry-gallery'});
        }
    });
  });
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    return $(this).ekkoLightbox({
        onShown: function() {
            if (window.console) {
                return console.log('Checking our the events huh?');
            }
        },
        onNavigate: function(direction, itemIndex) {
            if (window.console) {
                return console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
            }
        }
    })
});
