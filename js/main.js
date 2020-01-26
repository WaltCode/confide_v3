const year = new Date().getFullYear()
var copy = '&copy; ' + `${year }` + ' Confide';
$(document).ready(function(){
    $("p.copy").html(copy);

    $("img.me-nu").click(function(){
        $("div#menu-tray").css("display", "block");
        $("div#m-icon").css("display", "none");
    });
    $("div#menu-tray").click(function(){
        $("div#menu-tray").css("display", "none");
        $("div#m-icon").css("display", "block");
    })
})
// $(document).ready(function(){
    
// })