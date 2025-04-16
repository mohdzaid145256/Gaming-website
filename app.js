const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const movieList = ['hero-1.mp4', 'hero-2.mp4', 'hero-3.mp4', 'hero-4.mp4'];

let index = 0;

nextButton.addEventListener('click', function() {
    index = (index + 1) % movieList.length;
    video.src = movieList[index];
    video.play().catch(error => {
        // Handle autoplay restrictions
        console.log('Video play failed:', error);
    });
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('autoDisplay');
        }
    });
});

document.querySelectorAll('.autoDisplay').forEach((element) => {
    observer.observe(element);
});
// Test backend connection
fetch('http://localhost:5000')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Backend connection failed:', error));