const DESTINATION_SPACE_DATA = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
};
//  ----destination target -------
const Destination_btns = document.querySelectorAll(
  ".destiantion_sub_navigation"
);

const destination_title = document.getElementById("destination_title");
const destination_description = document.getElementById(
  "destination_description"
);
const avg_distance = document.getElementById("avg_travel");
const avg_time = document.getElementById("avg_time");

const destination_image = document.getElementById("destination_img");

// ============= destinaion page script ========

const destination_page_data = DESTINATION_SPACE_DATA.destinations;

let currentdestination = 0;

destination_title.textContent = destination_page_data[currentdestination].name;
destination_description.textContent =
  destination_page_data[currentdestination].description;

avg_distance.textContent = destination_page_data[currentdestination].distance;
avg_time.textContent = destination_page_data[currentdestination].travel;

destination_image.setAttribute(
  "src",
  destination_page_data[currentdestination].images.png
);

destination_page_data.forEach((item, idx) => {
  const button = document.createElement("button");
  button.textContent = item.name;
  Destination_btns[0].appendChild(button);
  if (currentdestination == idx) {
    button.classList.add("destination_btn_active");
  }
  button.addEventListener("click", () => {
    currentdestination = idx;
    for (const item of Destination_btns[0].children) {
      item.classList.remove("destination_btn_active");
    }

    if (currentdestination == idx) {
      button.classList.add("destination_btn_active");
    }

    destination_title.textContent =
      destination_page_data[currentdestination].name;

    destination_description.textContent =
      destination_page_data[currentdestination].description;
    destination_description.textContent =
      destination_page_data[currentdestination].description;

    avg_distance.textContent =
      destination_page_data[currentdestination].distance;
    avg_time.textContent = destination_page_data[currentdestination].travel;

    destination_image.setAttribute(
      "src",
      destination_page_data[currentdestination].images.png
    );
  });
});

//  --------------- crew page scrpit ============
