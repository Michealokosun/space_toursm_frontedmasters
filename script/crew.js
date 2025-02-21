const CREW_SPACE_DATA = {
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: "./assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "./assets/crew/image-mark-shuttleworth.png",
        webp: "./assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "./assets/crew/image-victor-glover.png",
        webp: "./assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "./assets/crew/image-anousheh-ansari.png",
        webp: "./assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
};

const crew_role = document.getElementById("crew_role");
const crew_name = document.getElementById("crew_name");
const crew_description = document.getElementById("crew_description");
const crew_img = document.getElementById("crew_img");
const crew_navigation = document.querySelectorAll("#crew_navigation div");

const crew_page_data = CREW_SPACE_DATA.crew;
let currentdomvalue = 0;
window.addEventListener("load", updatedom(currentdomvalue));

function updatedom(currrentdom) {
  for (const item of crew_navigation) {
    item.classList.remove("crew_active");
  }
  crew_role.textContent = crew_page_data[currrentdom].role;
  crew_name.textContent = crew_page_data[currrentdom].name;
  crew_description.textContent = crew_page_data[currrentdom].bio;
  crew_img.setAttribute("src", crew_page_data[currrentdom].images.webp);
  if (currrentdom == 0) {
    crew_navigation[0].classList.add("crew_active");
  }
}

setInterval(() => {
  currentdomvalue++;
  if (currentdomvalue > 3) {
    currentdomvalue = 0;
  }

  updatedom(currentdomvalue);
  crew_navigation.forEach((item, idx) => {
    if (currentdomvalue == idx) {
      item.classList.add("crew_active");
    }
  });
}, 5000);

crew_navigation.forEach((item, idx) => {
  item.addEventListener("click", () => {
    currentdomvalue = idx;
    updatedom(currentdomvalue);

    if (currentdomvalue == idx) {
      item.classList.add("crew_active");
    }
  });
});
