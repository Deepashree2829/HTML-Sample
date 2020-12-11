    // Script to open and close sidebar
    var menu_value = false;
    function open_menu(menu_value) {
        if(menu_value) {
            document.getElementById("sidebar").style.display = "block";
        } else {
            document.getElementById("sidebar").style.display = "none";
        }
        menu_value = false;
    }