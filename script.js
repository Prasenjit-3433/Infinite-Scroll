const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray;

// Helper function to Set attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos and Add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Unsplash API
const noOfPhotos = 10;
const apiKey = 'xCeQoIgKXxWsCfLv9grx0_cy9wzWQVsKp5jf3GczJoo';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${noOfPhotos}`;

// Get photos from Unsplash Api:
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error here...
    }
}

// On Load..
getPhotos();