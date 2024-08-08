$(document).ready(function () { 

    // hamburger functionality
    $(document).on("click", ".header__hamburger-list", function() {
        $(".header__hamburger-list, .header__nav-list").toggleClass("active");
    });

    // balance summary mob clickability
    $(document).on("click", ".header__nav-link", function() {
        $(".header__nav-link, .header__nav-dropdwon-list").toggleClass("active");
    });
});

// tab functionality
function openTab(evt, tabName) {
    var i, tabContent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

