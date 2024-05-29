document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-description-container img');
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName("close")[0];
    const descriptionElement = document.getElementById('productDescription');

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            descriptionElement.textContent = this.nextElementSibling.textContent;
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});