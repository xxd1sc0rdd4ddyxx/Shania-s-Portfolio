document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.thumbnail').forEach(img => {
        img.addEventListener('click', function() {
            document.getElementById('lightbox-img').src = this.src;
            document.getElementById('lightbox').style.display = 'flex';
        });
    });
    
    document.getElementById('lightbox').addEventListener('click', function(event) {
        if (event.target !== document.getElementById('lightbox-img')) {
            this.style.display = 'none';
        }
    });
});
