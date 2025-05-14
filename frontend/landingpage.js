$("#goTag").click(function () {
    $(".mainContainer").addClass("slideUpFadeOut");
    $(".mainContainer").one("animationend", function () {
        $(".mainContainer").hide();
        $(".infoContainer").show();
        $(".infoContainer").addClass("dropsIn")
    });
})

$("uploadButton").click(function () {
    
});