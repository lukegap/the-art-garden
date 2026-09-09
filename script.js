/* THE ART GARDEN — EDITABLE EVENTS */
const EVENTS_URL = "events.json";

function renderEvents(events) {
  const eventGrid = document.querySelector("#event-grid");
  const activeEvents = (events || []).filter(e => e.active !== false);
  eventGrid.innerHTML = "";
  activeEvents.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-art"><img src="${event.image}" alt="${event.title} event artwork"></div>
      <div class="event-info">
        <span class="eyebrow">UPCOMING EVENT</span>
        <h3>${event.title}</h3>
        <p>${event.subtitle}</p>
        <div class="event-meta">
          <div>◷ ${event.date}</div>
          <div>◷ ${event.time}</div>
          <div>⌖ ${event.location}</div>
        </div>
        <div class="event-price">${event.price}</div>
        <a class="btn primary" href="${event.bookingUrl || '#'}" target="_blank" rel="noopener">REGISTER HERE →</a>
      </div>`;
    eventGrid.appendChild(card);
  });
  document.querySelector("#main-booking-link").href = activeEvents[0]?.bookingUrl || "#events";
}

fetch(EVENTS_URL)
  .then(r => r.ok ? r.json() : Promise.reject(new Error("Could not load events.json")))
  .then(renderEvents)
  .catch(err => {
    console.error(err);
    renderEvents([]);
  });

document.querySelector("#year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
document.querySelector(".menu-toggle").addEventListener("click", () => header.classList.toggle("open"));
document.querySelectorAll(".site-header nav a").forEach(a => a.addEventListener("click", () => header.classList.remove("open")));
