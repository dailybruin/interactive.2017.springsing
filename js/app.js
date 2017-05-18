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
});