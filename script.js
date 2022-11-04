const video = document.getElementById('video');
const btn = document.getElementById('btn');

// Asking, capturing the media content & assigning it to the video html element
const startCapture = async function () {
  try {
    // Ask permission to capture screen/ window/ tab
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    // Assigning the video stream to our video html element
    video.srcObject = captureStream;
    // Play after video's metadata has loaded
    video.onloadedmetadata = () => video.play();
  } catch (error) {
    alert(`💥 Auch! Something went wrong here: ${error} 💥`);
  }
};

// Showing the video in PiP when the button is pressed
btn.addEventListener('click', async function () {
  // Disabling the button
  btn.disabled = true;
  // Starting the video picture in picture
  await video.requestPictureInPicture();
  // Enabling the button
  btn.disabled = false;
});

// Initialize
startCapture();
