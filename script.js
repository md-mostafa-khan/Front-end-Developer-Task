document.addEventListener('DOMContentLoaded', () => {
    // Functionality for thumbnail images
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.product-thumbnails img');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const newImageSrc = thumbnail.getAttribute('data-image');
            mainImage.src = newImageSrc;

            thumbnails.forEach(t => t.classList.remove('active'));
            
            thumbnail.classList.add('active');
        });
    });

    // Functionality for accordion
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.icon');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                button.classList.add('collapsed');
            } else {
            
                accordionButtons.forEach(otherButton => {
                    if (otherButton !== button) {
                        otherButton.classList.add('collapsed');
                        otherButton.nextElementSibling.style.maxHeight = null;
                        otherButton.querySelector('.icon').style.transform = 'rotate(0deg)';
                    }
                });

                content.style.maxHeight = content.scrollHeight + 'px';
                button.classList.remove('collapsed');
            }

            if (icon.style.transform === 'rotate(180deg)') {
                icon.style.transform = 'rotate(0deg)';
            } else {
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});
