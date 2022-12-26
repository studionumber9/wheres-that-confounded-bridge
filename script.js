const imageContainer = document.getElementById("image-container");
const imageElement = document.createElement("img");

// Set the source of the image element to a default image
imageElement.src = "https://i.insider.com/5b6209ecbda1c72a008b4576?width=700";

// Add the image element to the page
imageContainer.appendChild(imageElement);

// Function to randomly select and display a new image
function displayRandomImage() {
  // Array of image URLs
  const imageUrls = [
    "https://cdn.cnn.com/cnnnext/dam/assets/170221140207-golden-gate-bridge.jpg",
    "https://www.touropia.com/gfx/b/2010/03/tower_bridge.jpg",
    "https://assets3.thrillist.com/v1/image/1374746/1200x630/flatten;crop_down;webp=auto;jpeg_quality=100",
     "https://images.immediate.co.uk/production/volatile/sites/4/2021/06/GettyImages-1076692176-f7505eb.jpg?quality=90&resize=768,574",

"https://www.explore.com/img/gallery/amazing-bridges-around-the-world/chengyang-wind-and-rain-bridge-chengyang-china-1667497971.webp",

"https://blog.rentalmoose.com/wp-content/uploads/2021/08/1-11.jpg",
  ];

  // Generate a random number between 0 and the number of images
  const randomIndex = Math.floor(Math.random() * imageUrls.length);

  // Set the src attribute of the image element to the URL of the selected image
  imageElement.src = imageUrls[randomIndex];
}

// Add event listener that calls the displayRandomImage function when the page is loaded or refreshed
window.addEventListener("load", displayRandomImage);
window.addEventListener("refresh", displayRandomImage);