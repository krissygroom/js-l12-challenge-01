const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// async function to fetch an image from piscum.photos
const getImage = async function () {
    const res = await fetch( 
        "https://picsum.photos/v2/list?limit=100"
    );
    const images = await res.json();
    selectRandomImage(images);
};

// get random image from list of returned images
const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    displayImage(randomImage);
};

// display image
const displayImage = function (randomImage) {
    const author = randomImage.author;
    // console.log(author);
    const imageAddress = randomImage.download_url;
    img.src = imageAddress;
    img.onload = function() {
        authorSpan.innerText = author;
        imgDiv.classList.remove('hide');
    };    
};

button.addEventListener("click", function() {
    getImage();
});

