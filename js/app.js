$(document).ready(function(){
  // singer stories
  $.ajax({
      dataType: "json",
      url: "https://spreadsheets.google.com/feeds/list/1AiBFlbe0nXySwbz8ZqLTdsUCYO8UbCX_i1Fo3wylOFg/od6/public/values?alt=json"
  }).done(function (data) {
      console.log(data.feed.entry);
      var source   = $("#singer_template").html();
      var template = Handlebars.compile(source);
      var singer_html = template(data.feed.entry);
      $(".singer_modal_placeholder").replaceWith(singer_html);

      // queryStrip
      function queryStrip(string) {
          string = string.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
          var regex = new RegExp('[\\?&]' + string + '=([^&#]*)'),
              results = regex.exec(location.search);
          return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ''));
      }

      // Show bootstrap modal on load
      // If the modal id="terms", you can show it on page load by appending `?modal=terms` to the URL
      var modalString = queryStrip('modal'),
          modalToShow = '#' + modalString;
      if (modalString !== '') {
          $(modalToShow).modal('show');
      }

      // Show bootstrap tooltip on load
      // If the tooltip id="artistName", you can show it on page load by appending `?tooltip=artistName to the URL
      var tooltipString = queryStrip('tooltip'),
          tooltipToShow = '#' + tooltipString;
      if (tooltipString !== '') {
          $(tooltipToShow).tooltip('show');
      }

      // Show bootstrap popover on load
      // If the popover id="moreInfo", you can show it on page load by appending `?popover=moreInfo` to the URL
      var popoverString = queryStrip('popover'),
          popoverToShow = '#' + popoverString;
      if (popoverString !== '') {
          $(popoverToShow).popover('show');
      }

      // Show bootstrap tab on load
      // If the tab id="friendRequests", you can show it on page load by appending `?tab=friendRequests` to the URL
      var tabString = queryStrip('tab');
      if (tabString !== '') {
          $('.nav-tabs a[href=#' + tabString + ']').tab('show');
      }
  });

  // tweets
  $.ajax({
      dataType: "json",
      url: "https://spreadsheets.google.com/feeds/list/15YrTxXQG5G3IbHag2oemXeUH5yQ4oyQxZm96TEgprJI/od6/public/values?alt=json"
  }).done(function (data) {
      console.log(data.feed.entry);
      var source   = $("#tweet_template").html();
      var template = Handlebars.compile(source);
      var tweet_html = template(data.feed.entry.reverse());
      $("#tile-container").append(tweet_html);

  });


  // Add smooth scrolling to all links
  $("#navbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('#enter').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

    // flashing lights
    var lights = ['#light-1', '#light-2', '#light-3', '#light-4', '#light-5', '#light-6'];

    for (var i=0; i < lights.length; i++) {
        setTimeout(function (n){
            console.log(lights[n]);
            $(lights[n]).show();
        }, i*600, i); 
    }

    setTimeout(function (){
        $('#enter').fadeIn();
    }, 3600); 
});
