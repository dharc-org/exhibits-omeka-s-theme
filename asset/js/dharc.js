$(document).ready(function() {
    
    var ActiveElementsList = document.querySelectorAll(".active");
    console.log(ActiveElementsList)
        
    var LastActive = ActiveElementsList[ActiveElementsList.length -1]

    $(LastActive).addClass('nav-active');
 });