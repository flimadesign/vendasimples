

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

/*window.addEventListener('resize', function(event){

    if (window.innerWidth < 200) {
        $("#wrapper").addClass("toggled");
        event.preventDefault();
    } else {
        $("#wrapper").removeClass("toggled");
        event.preventDefault();
    }

})
*/



/*
$(window).resize(function(event) {
    if (window.innerWidth > 200) {
        $("#wrapper").addClass("toggled");
        event.preventDefault();
    } else {
        $("#wrapper").removeClass("toggled");
        event.preventDefault();
    }
});
*/

$('.expand-li').on('click', function () {
  $(this).closest('.nhoodDrop').toggleClass('openInner');
});