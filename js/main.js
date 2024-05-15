/* Setup main navigation dropdown decoration */
function setupNav() {
  jQuery('#nav > ul > li > ul').each(function(){
    jQuery(this).prev().addClass('down');
  });
}


/* Setup input placeholder */
function setupInputPlaceholder() {
  jQuery('input').each(function(){
    var elm = jQuery(this),
        placeholder = elm.attr('placeholder');
    

    // If placeholder funtion not supported, setup javascript
    if ((!'placeholder' in this) && (placeholder !== '')) {
      elm.focus(function(){
           if (elm.val() === placeholder) {
             elm.val('');
           }
         }) 
         .blur(function(){
           if (elm.val() === '') {
             elm.val(placeholder);
           }
         });
    } 
  
  });
}


jQuery(document).ready(function(){
  setupNav();
  setupInputPlaceholder();
});

