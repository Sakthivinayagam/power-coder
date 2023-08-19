const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let counter = 0; // Add a counter variable

  arrow.addEventListener("click", () => {
    const movieList = movielists[i];
    const movieListWidth = movieList.offsetWidth;
    const movieListItemWidth = movieList.querySelector(".movie-list-item").offsetWidth;
    const maxTranslateX = (movieListWidth - movieListItemWidth) * -1;

    if (counter > maxTranslateX) {
      counter -= movieListItemWidth + 30; // Adjust the value based on your margin-right in CSS

      movieList.style.transform = `translateX(${counter}px)`;
    }
  });
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbarcontainer,.menu-list,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})

