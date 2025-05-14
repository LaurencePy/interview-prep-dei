const file = ""

$("#goTag").click(function () {
    $(".mainContainer").addClass("slideUpFadeOut");
    $(".mainContainer").one("animationend", function () {
        $(".mainContainer").hide();
        $(".infoContainer").show();
        $(".infoContainer").addClass("dropsIn")
    });
});

$(".uploadContainer").click(function () {
    $('.fileInput').click();
});

$('#fileInput').change(function () {
    file = this.files[0];
    if (file) {
        alert('Selected file: ' + file.name);
    }
});

$(".submitButton").click(function () {
    $(".infoContainer").addClass("slideUpFadeOut");
    $(".infoContainer").one("animationend", function () {
         $(".infoContainer").hide();
        window.location = "chat.html";
    });
});