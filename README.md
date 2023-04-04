# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Modern css reset](https://piccalil.li/blog/a-modern-css-reset/) - piccalil

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```html
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <script src="./script.js" defer></script>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet">

    <title>Interactive rating component main</title>
</head>
<body>
    <div class="carte-container">
        <div class="first-page | pages">
            <div class="flex">
                <div class="star-container">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div>
                    <h1 class="first-title">Flip the coin</h1>
                </div>
            </div>
            <div class="text-container">
                <p class="first-paragraphe">By Mohamed Sagou, <br>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! For more information, Visit my <a style="color:aliceblue;" href="https://github.com/medsagou/coin-flip">Git repo</a>
                </p>
            </div>
            <div class="container">
            <div class="coin" id="coin">
                <div class="heads">
                    <img src="/images/head.png">
                </div>
                <div class="tails">
                    <img src="/images/tails.png">
                </div>
            </div>
            <div class="stats" style="color:aliceblue;">
                <p id="heads-count">Heads: 0</p>
                <p id="tails-count">Tails: 0</p>
            </div>
            <div class="button-container">
                <button id="flip-button" type="button">SUBMIT</button>
            </div>
        </div>
    </div>
</body>
</html>
```

```css
.numbers[state="active"] {
  cursor: pointer;
  background-color: var(--neutral-300);
  color: var(--neutral-100);
}

@media (hover: hover) {
  .button-container > button:hover {
    background-color: var(--neutral-100);
    cursor: pointer;
    color: var(--primary-orng);
  }
  .numbers:hover {
    cursor: pointer;
    background-color: var(--primary-orng);
    color: var(--neutral-100);
  }
}
```

```js
function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
```

### Continued development

My first project with menu, Im so glad for finishing this work. Specialy the mobile version with the side menu on the right.

### Useful resources

- [W3schools](https://www.w3schools.com/) - This helped me for javaScript eventListener. I really liked this pattern and will use it going forward.
- [stackoverflow](https://stackoverflow.com/) - this website help me on the javascript when i get stock.

## Author

- Website - [Mohamed Sagou](https://github.com/medsagou)
- Frontend Mentor - [@medsagou](https://www.frontendmentor.io/profile/medsagou)
- Twitter - [@sagoumohamed](https://www.twitter.com/sagoumohamed)

## Acknowledgments

nothing for this project.
