// Gallery state
let images = [];
let currentImageIndex = 0;

// DOM elements
const galleryRound1 = document.getElementById('gallery-round1');
const galleryRound2 = document.getElementById('gallery-round2');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');
const overlayLabel = document.getElementById('overlay-label');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Round 1 image data
const round1Images = [
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

// Round 2 image data
const round2Images = [
    { filename: '0ab0b496-12f0-412f-b706-13702299c760.png', label: 'R2-01' },
    { filename: '02588436-bf51-4bf5-ab99-6ab90aa1cd73.png', label: 'R2-02' },
    { filename: '06e2c69a-a443-4a44-8f73-d8f7cd7d7b0d.png', label: 'R2-03' },
    { filename: '08d32fd1-66b2-466b-ad73-b6d77bb757e4.png', label: 'R2-04' },
    { filename: '09eaa6a8-3342-4334-b6d6-0f6dba4325b9.png', label: 'R2-05' },
    { filename: '0988b806-a911-4a91-9ad0-6dadfa6bd11a.png', label: 'R2-06' },
    { filename: '0f8c1311-ec6c-4ec6-8de6-e0dedddf4d1d.png', label: 'R2-07' },
    { filename: '1b587acf-da0a-4da0-ab8b-e2b8611ed5a6.png', label: 'R2-08' },
    { filename: '1d6b4813-0ec1-40ec-aa82-b2a8b270eedc.png', label: 'R2-09' },
    { filename: '1f582f83-f31e-4f31-be52-afe5a923d9c5.png', label: 'R2-10' },
    { filename: '26c4d762-e9ea-4e9e-80de-580dd8956d9d.png', label: 'R2-11' },
    { filename: '27a347e1-7501-4750-8f89-3cf8069a4d01.png', label: 'R2-12' },
    { filename: '3673f697-849c-4849-893d-f89308e4e019.png', label: 'R2-13' },
    { filename: '3c097689-79ba-479b-812b-1412b9e38695.png', label: 'R2-14' },
    { filename: '44fe8b6e-4a69-44a6-b29b-bf2984ab25f5.png', label: 'R2-15' },
    { filename: '4719b77f-42d6-442d-802b-f0023f95aa31.png', label: 'R2-16' },
    { filename: '4f0e46d5-8407-4840-b509-93506292afaa.png', label: 'R2-17' },
    { filename: '590bc8fb-158f-4158-a6ce-566c9918ae05.png', label: 'R2-18' },
    { filename: '5b0fd46f-59e4-459e-b17b-6f17221d3d7a.png', label: 'R2-19' },
    { filename: '67a6030a-9d21-49d2-80d9-f40db827f3e0.png', label: 'R2-20' },
    { filename: '6b16d2d3-e901-4e90-854c-1c54b358efbf.png', label: 'R2-21' },
    { filename: '6e2f4921-9d34-49d3-bb6b-8bb6852ecb6f.png', label: 'R2-22' },
    { filename: '7d4b8574-23eb-423e-9d20-f5d273965cd4.png', label: 'R2-23' },
    { filename: '7eb58b8e-0f6b-40f6-a053-1a0575dd8189.png', label: 'R2-24' },
    { filename: '80e04f18-f08e-4f08-971b-797190f7e556.png', label: 'R2-25' },
    { filename: '8325d9b9-2d42-42d4-b21a-5f212e8a23dc.png', label: 'R2-26' },
    { filename: '8572fa12-20e4-420e-925f-9525551b1f8b.png', label: 'R2-27' },
    { filename: '8c64f2c5-0c3b-40c3-a8e8-5e8e87dd1f65.png', label: 'R2-28' },
    { filename: '8d7f4f53-cdb8-4cdb-a6cd-fe6cb7e811bf.png', label: 'R2-29' },
    { filename: '9025ce89-b20c-4b20-8dbf-64dbe68b4a09.png', label: 'R2-30' },
    { filename: '989b2b67-2054-4205-a26c-3626570dce42.png', label: 'R2-31' },
    { filename: '9bf1395b-07a7-407a-b544-a754d50565c4.png', label: 'R2-32' },
    { filename: 'a088d6d7-3034-4303-a1a3-6a1a04996c15.png', label: 'R2-33' },
    { filename: 'a21ff6ef-217f-4217-9716-a571f65e0ff6.png', label: 'R2-34' },
    { filename: 'b1f38c82-f7d3-4f7d-abc1-1abc612565fc.png', label: 'R2-35' },
    { filename: 'b59e7bbe-32a2-432a-9d49-c1d4a052fc66.png', label: 'R2-36' },
    { filename: 'bac85776-887f-4887-bd25-6fd28b12bcaf.png', label: 'R2-37' },
    { filename: 'cc58cc40-0c76-40c7-a920-7292e6dcc1ed.png', label: 'R2-38' },
    { filename: 'd35e0bc5-8d47-48d4-a1d4-fa1d68563cf7.png', label: 'R2-39' },
    { filename: 'e13eef5c-18ec-418e-8fe1-40fefe430c02.png', label: 'R2-40' },
    { filename: 'e5052cf3-4ec8-44ec-875a-bc75c2ba117e.png', label: 'R2-41' },
    { filename: 'ef3f2353-c543-4c54-9df3-f1df1cc8d673.png', label: 'R2-42' },
    { filename: 'f2de8a12-be21-4be2-aca8-e2cae0cfae6f.png', label: 'R2-43' },
    { filename: 'f32c28ee-7977-4797-a66e-1e66b8f66234.png', label: 'R2-44' },
    { filename: 'f613f263-1834-4183-9f67-75f636e8907b.png', label: 'R2-45' }
];

// Initialize gallery
function initGallery() {
    // Combine all images for overlay navigation
    images = [...round1Images, ...round2Images];

    // Create Round 1 gallery items
    round1Images.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryRound1.appendChild(galleryItem);
    });

    // Create Round 2 gallery items
    round2Images.forEach((item, index) => {
        const globalIndex = round1Images.length + index;
        const galleryItem = createGalleryItem(item, globalIndex);
        galleryRound2.appendChild(galleryItem);
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
