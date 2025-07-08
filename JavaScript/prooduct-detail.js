document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const mainProductImage = document.getElementById('mainProductImage');
    const smallImageThumbnails = document.querySelectorAll('.small-image .img-item img');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentImageIndex = 0; // Keep track of the currently displayed image

    // --- Function to update the main image and active thumbnail ---
    function updateGallery(index) {
        // Ensure index is within bounds
        if (index < 0) {
            currentImageIndex = smallImageThumbnails.length - 1; // Loop to last image
        } else if (index >= smallImageThumbnails.length) {
            currentImageIndex = 0; // Loop to first image
        } else {
            currentImageIndex = index;
        }

        // Get the thumbnail element for the current index
        const currentThumbnail = smallImageThumbnails[currentImageIndex];

        // Update the main product image
        const newBigSrc = currentThumbnail.getAttribute('data-big-src');
        mainProductImage.setAttribute('src', newBigSrc);

        // Update the active class on thumbnails
        smallImageThumbnails.forEach(item => item.classList.remove('active'));
        currentThumbnail.classList.add('active');
    }

    // --- Event Listeners for Small Image Thumbnails ---
    smallImageThumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateGallery(index); // Update gallery to the clicked thumbnail's index
        });
    });

    // --- Event Listeners for Navigation Buttons ---
    prevButton.addEventListener('click', () => {
        updateGallery(currentImageIndex - 1); // Go to previous image
    });

    nextButton.addEventListener('click', () => {
        updateGallery(currentImageIndex + 1); // Go to next image
    });

    // --- Initial setup on page load ---
    // Make sure the gallery is initialized to the first image
    if (smallImageThumbnails.length > 0) {
        updateGallery(0); // Set to the first image (index 0)
    }
});