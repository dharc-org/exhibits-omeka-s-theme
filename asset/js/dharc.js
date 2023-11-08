$(document).ready(function() {
    
    var ActiveElementsList = document.querySelectorAll(".active");
    console.log(ActiveElementsList)
        
    var LastActive = ActiveElementsList[ActiveElementsList.length -1]
    console.log("lat active"+LastActive)

    $(LastActive).addClass('nav-active');
 });