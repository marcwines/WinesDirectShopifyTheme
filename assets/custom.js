$.fn.responsiveTabs = function() {

  return this.each(function() {
    var el = $(this),
        tabs = el.find('dt'),
        content = el.find('dd'),
        placeholder = $('<div class="responsive-tabs-placeholder"></div>').insertAfter(el);

    tabs.on('click', function() {
      var tab = $(this);

      tabs.not(tab).removeClass('active');
      tab.addClass('active');

      placeholder.html( tab.next().html() );
    });

    tabs.filter(':first').trigger('click');
  });

}


$('.responsive-tabs').responsiveTabs();

let giftMsg = document.querySelector("#Details-CartDrawer");
giftMsg.innerHTML += '<p>Please add any special instructions here. Additionally, if this is a gift, please enter a message for the recipient.</p>';