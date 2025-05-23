// Gallery state
let images = [];
let currentImageIndex = 0;

// DOM elements
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const overlayLabel = document.getElementById('overlay-label');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Image data - you can customize these labels for each image
const imageData = [
    { filename: '01531e95-a7f9-4a7f-9aa0-a9aa2747057a.png', label: '01' },
    { filename: '0049d76e-3a71-43a7-a860-1e86ee9de40b.png', label: '02' },
    { filename: '06f6037a-791a-4791-8961-68963ff720d0.png', label: '03' },
    { filename: '07ca4229-e2be-4e2b-bd27-6fd2844e2bb5.png', label: '04' },
    { filename: '12c04a16-fa3d-4fa3-ad4c-aad41267b9c5.png', label: '05' },
    { filename: '180113c8-1fe5-41fe-8589-3858102f3fbe.png', label: '06' },
    { filename: '1dd2fb25-5609-4560-a302-ce30d2feb5fb.png', label: '07' },
    { filename: '219e2b51-a6c3-4a6c-acce-1acc61b4d9cf.png', label: '08' },
    { filename: '24e77517-9f4a-49f4-9068-8d062802ba5a.png', label: '09' },
    { filename: '36a29f40-c9e0-4c9e-af0e-8ef039f83a5a.png', label: '10' },
    { filename: '38c8161e-042b-4042-9ee5-ddee66ce5762.png', label: '11' },
    { filename: '3d4bdf93-96bf-496b-928a-e9282c40c26b.png', label: '12' },
    { filename: '40daf2b2-fb08-4fb0-8ff4-ccff8bf7d035.png', label: '13' },
    { filename: '440e1ecc-9344-4934-b9d6-eb9db275a383.png', label: '14' },
    { filename: '44191d6d-5bcc-45bc-a33d-9233a97a5238.png', label: '15' },
    { filename: '5e8c0914-96ca-496c-a3c2-2e3c0384dddb.png', label: '16' },
    { filename: '6e5c4c79-ab4c-4ab4-9851-c985a53f0f9c.png', label: '17' },
    { filename: '783d0db2-1055-4105-91bc-b11ba734755b.png', label: '18' },
    { filename: '830d3bab-c6eb-4c6e-badf-5fadef49d850.png', label: '19' },
    { filename: '8a9d5abe-7f5e-47f5-9543-c9543c7a3ae5.png', label: '20' },
    { filename: '8b340467-1a93-41a9-8b73-f0b79f45414c.png', label: '21' },
    { filename: '8d2818cd-f5d4-4f5d-9c90-49c9916ae8b6.png', label: '22' },
    { filename: '8e4e1595-593d-4593-b353-0335cb4f3670.png', label: '23' },
    { filename: '8e694a38-38c5-438c-9a19-dda1d3e550d3.png', label: '24' },
    { filename: '8ebe626b-529f-4529-929c-8129274d4bef.png', label: '25' },
    { filename: '97fee037-d2c5-4d2c-99f0-399f86ea4df4.png', label: '26' },
    { filename: '9aa2e08a-52d8-452d-b3c9-673c5702118b.png', label: '27' },
    { filename: 'a5b95fe1-dcfa-4dcf-9b67-99b6d9bf03d1.png', label: '28' },
    { filename: 'a66f56a8-3609-4360-bd7a-5bd7ffa25a54.png', label: '29' },
    { filename: 'b2499305-d9ce-4d9c-b143-4f14a7bd5213.png', label: '30' },
    { filename: 'b5685739-bbf7-4bbf-8770-9877b02147b6.png', label: '31' },
    { filename: 'b7bcc874-9daa-49da-99b9-619b379299c5.png', label: '32' },
    { filename: 'b9bec3fa-3989-4398-8827-3882d6e0b2ad.png', label: '33' },
    { filename: 'bed8a24e-1e28-41e2-ac88-8ec8e86e3509.png', label: '34' },
    { filename: 'c56fa8aa-2187-4218-b0e8-330e0e86b147.png', label: '35' },
    { filename: 'cfd7e55d-b6a8-4b6a-a453-3a45393a0798.png', label: '36' },
    { filename: 'd762fe89-9c3d-49c3-b519-5351f12b7f36.png', label: '37' },
    { filename: 'd9a4e910-b476-4b47-b2b7-872b990f6d13.png', label: '38' },
    { filename: 'ed512553-0e36-40e3-928f-e528805b4009.png', label: '39' },
    { filename: 'eef33634-77db-477d-908c-9d08e2c9b1cd.png', label: '40' },
    { filename: 'f84efd62-923e-4923-8960-8c96335bbf93.png', label: '41' }
];

// Initialize gallery
function initGallery() {
    // Filter imageData to only include images that exist
    images = imageData.filter(item => {
        // Check if file exists by attempting to create an image element
        return true; // We'll assume all listed images exist
    });

    // Create gallery items
    images.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        gallery.appendChild(galleryItem);
    });
}

// Create individual gallery item
function createGalleryItem(item, index) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.addEventListener('click', () => openOverlay(index));

    const img = document.createElement('img');
    img.src = `images/${item.filename}`;
    img.alt = item.label;
    img.loading = 'lazy';

    const label = document.createElement('div');
    label.className = 'gallery-label';
    label.textContent = item.label;

    galleryItem.appendChild(img);
    galleryItem.appendChild(label);

    return galleryItem;
}

// Open overlay with specific image
function openOverlay(index) {
    currentImageIndex = index;
    updateOverlayImage();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close overlay
function closeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Update overlay image
function updateOverlayImage() {
    const currentImage = images[currentImageIndex];
    overlayImg.src = `images/${currentImage.filename}`;
    overlayImg.alt = currentImage.label;
    overlayLabel.textContent = currentImage.label;
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateOverlayImage();
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateOverlayImage();
}

// Event listeners
closeBtn.addEventListener('click', closeOverlay);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Close overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeOverlay();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeOverlay();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
});

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', initGallery);
