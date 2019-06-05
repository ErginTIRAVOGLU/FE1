new WOW().init();

$("#responsiveMenu").click(function (e) { 
    e.preventDefault();
    $("#overlayMenu").addClass("mobileMenuGoster");
    $("body").addClass("overflowHide");
});

$("#overlayMenuKapat").click(function (e) { 
    e.preventDefault();
    $("#overlayMenu").removeClass("mobileMenuGoster");
    $("body").removeClass("overflowHide");
});

