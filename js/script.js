let kr3 = document.getElementById("kr3");
if (kr3 != null) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("kr2");
    kr3.innerHTML = "Light Mode";
  }

  kr3.onclick = function () {
    document.body.classList.toggle("kr2");

    if (document.body.classList.contains("kr2")) {
      localStorage.setItem("theme", "dark");
      kr3.innerHTML = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      kr3.innerHTML = "Dark Mode";
    }
  };
}
window.onload = function(){
  document.querySelector(".heroText").classList.add("showTitle");
};
function openVideo() {
  let videoContainer = document.getElementById("videoContainer");
  if (videoContainer != null) {
    videoContainer.style.display = "flex";
  }
}
function closeVideo() {
  let videoContainer = document.getElementById("videoContainer");
  if (videoContainer != null) {
    videoContainer.style.display = "none";
  }
}
let ticketCount = 1;
let ticketType = document.getElementById("ticketType");
let countDisplay = document.getElementById("count");
let priceDisplay = document.getElementById("price");
let countSummary = document.getElementById("countSummary");
let totalDisplay = document.getElementById("total");
function updateDisplay() {
  if (ticketType != null && countDisplay != null && priceDisplay != null && countSummary != null && totalDisplay != null) {
    let unitPrice = parseInt(ticketType.value);
    countDisplay.innerText = ticketCount;
    countSummary.innerText = ticketCount;
    priceDisplay.innerText = unitPrice;
    totalDisplay.innerText = unitPrice * ticketCount;
  }
}
function increase() {
  ticketCount++;
  updateDisplay();
}
function decrease() {
  if (ticketCount > 1) {
    ticketCount--;
    updateDisplay();
  }
}
function booknow() {
  alert("Successful Book");
}
if (ticketType != null) {
  ticketType.addEventListener("change", updateDisplay);
  updateDisplay();
}
let museums = [
  { id: 1, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (9).jpeg", name: "Grand Egyptian Museum", location: "Cairo", description: "The Grand Egyptian Museum is one of the largest archaeological museums in the world. It is located near the Giza pyramids and displays thousands of ancient Egyptian artifacts. The museum includes the full collection of King Tutankhamun’s treasures. It offers modern technology, large exhibition halls, and an amazing cultural experience for visitors." },
  { id: 2, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (6).jpeg", name: "Egyptian Museum", location: "Cairo", description: "The Egyptian Museum in Cairo is one of the oldest and most famous museums in Egypt. It contains a vast collection of ancient artifacts, including statues, jewelry, and royal mummies. The museum is especially known for the treasures of King Tutankhamun. It provides visitors with a deep look into ancient Egyptian civilization and history." },
  { id: 3, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (4).jpeg", name: "Alexandria National Museum", location: "Alexandria", description: "Alexandria National Museum is located in a beautiful historic palace in Alexandria. It presents Egypt’s history from ancient times to the modern era. The museum includes artifacts from the Pharaonic, Greco-Roman, Coptic, and Islamic periods. It offers a clear timeline of Egyptian culture and helps visitors understand the development of society through different ages." },
  { id: 4, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (1).jpeg", name: "National Museum Of Egyptian Civilization", location: "Cairo", description: "The National Museum of Egyptian Civilization showcases the history of Egypt from prehistoric times to the present day. It is famous for the Royal Mummies Hall, where many ancient kings are displayed. The museum uses modern design and technology to present information in an engaging way. It provides a complete story of Egyptian civilization." },
  { id: 5, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (5).jpeg", name: "Nubian Museum", location: "Aswan", description: "The Nubian Museum in Aswan focuses on Nubian culture, traditions, and history. It displays artifacts, models, and photographs that show daily life in Nubia. The museum also explains the impact of the High Dam on Nubian people. It is an important place to learn about the unique identity and heritage of Nubian communities." },
  { id: 6, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (8).jpeg", name: "Hurghada Museum", location: "Hurghada", description: "Hurghada Museum is a modern museum located near the Red Sea. It displays a collection of ancient Egyptian artifacts along with items from later periods. The museum is designed to give visitors a quick and enjoyable cultural experience. It is a great place for tourists in Hurghada to learn about Egypt’s history in a simple way." },
  { id: 7, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM (3).jpeg", name: "Imhotep Museum", location: "Giza", description: "Imhotep Museum is located in Saqqara and is dedicated to the famous architect Imhotep. It displays discoveries from nearby archaeological sites, including statues, tools, and inscriptions. The museum helps visitors understand the importance of Saqqara in ancient Egypt. It also highlights the achievements of Imhotep in architecture and medicine." },
  { id: 8, image: "img/WhatsApp Image 2026-04-30 at 4.11.13 PM.jpeg", name: "Luxor Museum", location: "Luxor", description: "Luxor Museum is known for its well-organized and high-quality displays. It contains statues, artifacts, and objects from ancient Thebes. The museum focuses on clarity and presentation, making it easy for visitors to understand the history. It offers a calm and informative experience compared to larger, more crowded museums in Egypt." }
];
let museumCard = document.querySelector(".card-container");
if (museumCard != null) {
  for (let i = 0; i < museums.length; i++) {
    museumCard.innerHTML += `
      <div class="card">
        <img src="${museums[i].image}" alt="${museums[i].name}">
        <div class="cardText">
          <h3>${museums[i].name}</h3>
          <p>${museums[i].location}</p>
          <div class="card-icon"><i class="fi fi-br-search" onclick="preparePopup(${museums[i].id})"></i></div>
        </div>
      </div>
    `;
  }
  let searchInput = document.querySelector(".search form input");

  if (searchInput != null) {
    searchInput.addEventListener("keyup", function () {
      let searchValue = searchInput.value.toLowerCase();
      let cards = document.querySelectorAll(".card-container .card");

      for (let i = 0; i < cards.length; i++) {
        let text = cards[i].textContent.toLowerCase();
        if (text.includes(searchValue)) {
          cards[i].style.display = "";
        } else {
          cards[i].style.display = "none";
        }
      }
    });
  }
  let popup = document.querySelector(".popup");
  let boxOfPopup = document.querySelector(".popup .box");

  if (popup != null) {
    popup.addEventListener("click", closePopup);
  }
  if (boxOfPopup != null) {
    boxOfPopup.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
  let gridBtn = document.querySelector(".view.grid");
  let listBtn = document.querySelector(".view.list");
  let container = document.querySelector(".card-container");
  if (gridBtn != null && listBtn != null && container != null) {
    gridBtn.addEventListener("click", function () {
      container.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    });
    listBtn.addEventListener("click", function () {
      container.classList.add("list-view");
      gridBtn.classList.remove("active");
      listBtn.classList.add("active");
    });
  }
}
function openPopup(popupName) {
  let popupEle = document.querySelector(".popup." + popupName);
  if (popupEle != null) {
    popupEle.classList.add("active");
    setTimeout(function () {
      popupEle.classList.add("show");
    }, 10);
  }
}
function closePopup() {
  let popupEle = document.querySelector(".popup.active");

  if (popupEle != null) {
    popupEle.classList.remove("show");
    setTimeout(function () {
      popupEle.classList.remove("active");
    }, 300);
  }
}
function getMuseum(museumId) {
  return museums.filter(function (item) {
    return item.id == museumId;
  })[0];
}
function preparePopup(museumId) {
  let museum = getMuseum(museumId);
  let popupMuseumEle = document.querySelector(".museum-popup .box");
  if (museum != null && popupMuseumEle != null) {
    popupMuseumEle.innerHTML = `
      <div class="popup-img"><img src="${museum.image}" alt="${museum.name}"></div>
      <div class="popup-text">
        <i class="fi fi-br-cross" onclick="closePopup()"></i>
        <h3>${museum.name}</h3>
        <hr>
        <h6>${museum.location}</h6>
        <p>${museum.description}</p>
      </div>
    `;
    openPopup("museum-popup");
  }
}
let formg = document.querySelector(".formg");

if (formg != null) {
  formg.onsubmit = function (e) {
    e.preventDefault();

    let inputs = formg.getElementsByTagName("input");
    let msg = formg.querySelector(".formMsg");

    if (inputs[0].value.length < 5) {
      msg.innerText = "Email must be 5 letters or more";
    } else if (inputs[1].value.length < 5) {
      msg.innerText = "Password must be 5 letters or more";
    } else {
      console.log("here");
      msg.innerText = "Login success";
      alert("Success Your Request Has Been Processed!!");
      window.location.href = "index.html";
    }
  };
}
let formr = document.querySelector(".formr");
if (formr != null) {
  formr.onsubmit = function (e) {
    e.preventDefault();

    let inputs = formr.getElementsByTagName("input");
    let msg = formr.querySelector(".formMsg");

    if (inputs[0].value.length < 5) {
      msg.innerText = "Name must be 5 letters or more";
    } else if (inputs[1].value.length < 5) {
      msg.innerText = "Email must be 5 letters or more";
    } else if (inputs[2].value.length < 5) {
      msg.innerText = "Password must be 5 letters or more";
    } else {
      msg.innerText = "Register success";
      alert("Success Your Request Has Been Processed!!");
      window.location.href = "index.html";
    }
  };
}
let contactForm = document.getElementById("contactForm");
let contactMsg = document.getElementById("contactMsg");
if (contactForm != null) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (contactMsg != null) {
      contactMsg.innerText = "Your message has been received successfully.";
    } else {
      alert("Your message has been received successfully.");
    }
  });
}
