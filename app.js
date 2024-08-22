// Modal
function openModal() {
    document.getElementById("calendarModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("calendarModal").style.display = "none";
}

// Dropdown menu
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");

    // Adjust position if dropdown overflows the viewport
    var rect = dropdown.getBoundingClientRect();
    if (rect.bottom > window.innerHeight) {
        dropdown.style.top = (window.innerHeight - rect.height - 10) + "px";
    } else {
        dropdown.style.top = ""; 
    }

    // Adjust height if it overflows the viewport
    if (rect.height > window.innerHeight) {
        dropdown.style.height = (window.innerHeight - rect.top - 20) + "px";
    } else {
        dropdown.style.height = ""; 
    }
}

// Close the modal or dropdown if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("calendarModal");
    var dropdown = document.getElementById("myDropdown");

    if (event.target == modal) {
        closeModal();
    }

    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}