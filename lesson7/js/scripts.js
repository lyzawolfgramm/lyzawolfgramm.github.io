let options = {
  threshold: 1
}

const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const img_src = img.dataset.src;
      img.src = img_src; 
      img.removeAttribute('data-src');
      observer.unobserve(img);

    }
  })
}

let imgs = document.querySelectorAll('img.mtn');

imgs.forEach(img => {
  observer.observe(img);
})