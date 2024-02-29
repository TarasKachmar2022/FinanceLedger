// document.querySelectorAll('a.site-nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     const href = this.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);

//     const topOffset = 99;
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
//   });
// });

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 1.3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        // animItem.classList.add('_active');
        changeSection(animItem);
        // } else {
        //   animItem.classList.remove('_active');
        // }
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
