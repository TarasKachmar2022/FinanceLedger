window.onscroll=function(){return e=document.querySelector("[data-header]"),t=e.offsetHeight,void(window.pageYOffset>t?e.classList.add("header--no-transparency"):e.classList.remove("header--no-transparency"));var e,t},document.querySelectorAll("a.site-nav__link").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href").substring(1),n=document.getElementById(t).getBoundingClientRect().top-119;window.scrollBy({top:n,behavior:"smooth"})}))}));
//# sourceMappingURL=index.79355135.js.map
