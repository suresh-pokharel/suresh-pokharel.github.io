window.onload = function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = $(this).data('include') + '.html';
    console.log(file)
    $(this).load(file);
  });
}
