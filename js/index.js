window.onload = () => {
  let lastIndex = 1;
  let currentTransform = 0;
  const dynamicScrollEl = document.querySelector('#dynamic-scroll');
  document.querySelectorAll('.navbar ol li a').forEach(el => {
    el.onclick = e => {
      e.preventDefault();
      const section = document.querySelector(e.target.getAttribute('href'));
      const currentIndex = parseInt(section.dataset.index);

      if (currentIndex > lastIndex) {
        currentTransform -= section.offsetHeight * (Math.abs(currentIndex - lastIndex));
        dynamicScrollEl.style.transform = `translateY(${currentTransform}px)`;

        lastIndex = currentIndex;
      } else if (currentIndex < lastIndex) {
        currentTransform += section.offsetHeight * (Math.abs(currentIndex - lastIndex));
        dynamicScrollEl.style.transform = `translateY(${currentTransform}px)`;

        lastIndex = currentIndex;
      }
    }
  });
}