$(document).ready(function() {
    if ($("body").height() > $(window).height() && $(window).scrollTop() + $(window).height() != $(document).height()) {
        document.getElementById("tripuntable").textContent="...";
    }
});
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        document.getElementById("tripuntable").textContent=" ";
    }
    else{
        document.getElementById("tripuntable").textContent="...";
    }
});