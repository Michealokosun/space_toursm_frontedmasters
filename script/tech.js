const SPACE_DATA = {
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

//  ------- TARGET ------

const tech_name = document.getElementById("tech_name");
const tech_description = document.getElementById("tech_description");
const tech_img = document.getElementById("tech_img");
const tech_navigation = document.querySelectorAll("#tech_navigation div");
let currenttech = 0;

window.addEventListener("load", updatedom(currenttech));

function updatedom(currrentdom) {
  for (const item of tech_navigation) {
    item.classList.remove("tech_active");
  }
  tech_name.textContent = SPACE_DATA.technology[currrentdom].name;
  tech_description.textContent = SPACE_DATA.technology[currrentdom].description;
  tech_img.setAttribute(
    "src",
    SPACE_DATA.technology[currrentdom].images.portrait
  );
  ("");

  if (currenttech == 0) {
    tech_navigation[currenttech].classList.add("tech_active");
  }
}

tech_navigation.forEach((item, idx) => {
  item.addEventListener("click", () => {
    currenttech = idx;
    updatedom(currenttech);

    if (currenttech == idx) {
      item.classList.add("tech_active");
    }
  });
});
