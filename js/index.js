window.onload = () => {
  let lastIndex = 1;
  let currentTransform = 0;
  const dynamicScrollEl = document.querySelector('#dynamic-scroll');
  document.querySelectorAll('.navbar ol li a').forEach(el => {

    const makeTransition = e => {
      e.preventDefault();
      let target = e.target;

      while (target.nodeName !== 'A')
        target = target.parentNode;

      document.querySelector('.navbar ol li a.active').classList.remove('active');
      target.classList.add('active');

      const section = document.querySelector(target.getAttribute('href'));
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

    el.onclick = e => makeTransition(e);
  });
}
