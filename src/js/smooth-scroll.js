document.querySelectorAll('a.site-nav__link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    let headerTopOffset = 0;
    headerTopOffset = topOffsetSelector();

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerTopOffset;

    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
  });

  function topOffsetSelector() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 768) {
      headerTopOffset = 82;
      return headerTopOffset;
    } else {
      headerTopOffset = 104;
      return headerTopOffset;
    }
  }
});
