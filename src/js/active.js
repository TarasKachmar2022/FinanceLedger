const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      // const pageHeight = document.body.scrollHeight;
      // var pageHeight = document.documentElement.scrollHeight;
      // var pageHeight = document.body.offsetHeight;
      const pageHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const vh = window.innerHeight;
      const animStart = 1.3;
      const topOffset = 99;
      console.log(vh + pageYOffset + topOffset + animItemHeight);
      console.log(pageHeight);
      if (
        (pageYOffset + topOffset > animItemOffset &&
          pageYOffset + topOffset < animItemOffset + animItemHeight) ||
        vh + pageYOffset + topOffset + animItemHeight > pageHeight
      ) {
        changeSection(animItem);
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop };
}

function changeSection(animItem) {
  const navElements = document.querySelectorAll('a.site-nav__link');
  const elementID = animItem.getAttribute('id');
  console.log(elementID);
  for (let index = 0; index < navElements.length; index++) {
    const navElement = navElements[index];
    const navID = navElement.getAttribute('href').substring(1);
    console.log(navID);
    if (elementID === navID) {
      console.log(navElement);
      console.log(elementID);
      navElement.classList.add('_active');
    }
  }
  const elementsForDelete = document.querySelectorAll('._active');
  console.log(elementsForDelete);
  if (elementsForDelete.length <= 1) return;
  for (let index = 0; index < elementsForDelete.length; index++) {
    const elementForDelete = elementsForDelete[index];
    console.log(elementForDelete);
    if (elementID !== elementForDelete) {
      elementForDelete.classList.remove('_active');
    }
  }
}

animOnScroll();
