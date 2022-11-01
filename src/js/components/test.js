{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  // same ids are connected.
  // Example:
  // "Print to console": {
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
  "Scroll Smooth": {
    "prefix": "scrollsmooth",
    "body": [
      "const anchors = document.querySelectorAll('${1:.header-nav__link}, ${2:.footer-nav__link}')",
      "for (let anchor of anchors) {",
      "anchor.addEventListener('click', function (e) {",
      "e.preventDefault()",
      "const blockID = anchor.getAttribute('href').substr(1)",
      "document.getElementById(blockID).scrollIntoView({",
      "behavior: 'smooth',",
      "block: 'start'",
      "})",
      "})",
      "}",
      "$0"
    ],
    "description": "Scroll Smooth to href anchor"
  },
  "Burger g": {
    "prefix": "g-burger",
    "body": [
      "document.querySelector('#burger').addEventListener('click', function () {",
        "document.querySelector('.burger').classList.toggle('burger--active')",
        "document.querySelector('.header__nav').classList.toggle('header__nav_active')",
        "document.querySelector('.header').classList.toggle('header-active')",
        "document.querySelector('.header-bottom__nav').classList.toggle('header-bottom__nav_active')",
      "});"
      "$0"
    ],
    "description": "G-Burger to html"
  }
}

