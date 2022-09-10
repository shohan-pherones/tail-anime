// animes
const animesArr = [
  {
    title: "Cowboy Bebop",
    year: "1998–1999",
    storyline: `Mankind has colonised the stars, yet humanity remains the same desperate and power-hungry species in 2071. A ragtag duo of spacefaring bounty-hunters, Spike Spiegel and Jet Black, struggle to make ends meet living amongst the stars; and things are about to get a hell of a lot more complicated when they adopt the super-dog Ein, persuade the seductive femme-fatale known as Faye Valentine, and the teenage-hacker Edward. These five figures are about to come across things crazier than the crew of the Bebop itself.`,
    poster:
      "https://static.gogoanime.lol/i/cache/images/b/b6/b650de88fed262ccef31e9a966c26977.jpg",
    rating: 8.9,
  },
  {
    title: "Steins;Gate",
    year: "2011–2015",
    storyline: `Okabe Rintarou, a university student who refers to himself as Crazy Mad Scientist Hououin Kyouma and his lab's members work on a microwave device that can transfer messages to the past. Without getting captured, they should get it working in order to beat the evil organization, SERN and stop their evil plans.`,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOGJlNDM3ZjktOTNiNy00YmNmLWJlOGYtNDM4MTI2ZjRjOTNmXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
    rating: 8.8,
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    year: "2019–",
    storyline: `A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.`,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    rating: 8.7,
  },
  {
    title: "High School DxD",
    year: "2012–2018",
    storyline: `The story follows Issei Hyodo, a dim-witted, lecherous second-year high school student who is killed by a girl on his first date ever. Issei is reincarnated as a demon, and from that day forward, he serves as an underling of Rias Gremory, a high-level demon who is also the prettiest girl on Issei's campus.`,
    poster: "https://cdn.myanimelist.net/images/anime/1331/111940l.jpg",
    rating: 8.6,
  },
];

// display animes
function displayAnimes() {
  const animesEl = document.querySelector(".animes");

  for (let i = 0; i < animesArr.length; i++) {
    const animeEl = document.createElement("div");
    animeEl.classList.add("anime");
    animeEl.innerHTML = `
          <div class="anime-poster">
            <img
              src="${animesArr[i].poster}"
              alt="${animesArr[i].title}"
            />
          </div>
          <div class="anime-body">
            <div class="anime-title">
              <h2>${animesArr[i].title} (${animesArr[i].year})</h2>
            </div>
            <div class="watch">
              <div class="btn">&plus; Add to Watchlist</div>
            </div>
          </div>
          <div class="rating">
            <span>⭐ ${animesArr[i].rating}/10</span>
          </div>
    `;
    animesEl.insertAdjacentElement("beforeend", animeEl);
  }
}
displayAnimes();
