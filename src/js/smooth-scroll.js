document.querySelectorAll('a.site-nav__link').forEach(link => {
  link.addEventListener('click', function (e) {
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

  let headerTopOffset;

  if (viewportWidth >= 768) {
    headerTopOffset = 82;
    return headerTopOffset;
  } else {
    headerTopOffset = 104;
    return headerTopOffset;
  }
}
