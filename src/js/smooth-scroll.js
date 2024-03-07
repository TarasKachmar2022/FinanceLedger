document.querySelectorAll('a.site-nav__link').forEach(link => {
  mobile = link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    let topOffset = 0;
    topOffset = topOffsetSelector();

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
  });
});

function topOffsetSelector() {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 768) {
    topOffset = 82;
    return topOffset;
  } else {
    topOffset = 104;
    return topOffset;
  }
}
