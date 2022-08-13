// Unsplash API
const noOfPhotos = 10;
const apiKey = 'xCeQoIgKXxWsCfLv9grx0_cy9wzWQVsKp5jf3GczJoo';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${noOfPhotos}`;

// Get photos from Unsplash Api:
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error here...
    }
}

// On Load..
getPhotos();