/* THE ART GARDEN — NO-CODE CONTENT */
const EVENTS_URL = "events.json";
const SETTINGS_URL = "site-settings.json";

function safeUrl(value) {
  return value || "#";
}

function renderEvents(data) {
  const eventGrid = document.querySelector("#event-grid");
  const events = Array.isArray(data) ? data : (data?.events || []);
  const activeEvents = events.filter(e => e.active !== false);
  eventGrid.innerHTML = "";

  activeEvents.forEach(event => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.innerHTML = `
      <div class="event-art">
        <img src="${safeUrl(event.image)}" alt="Photo from ${event.title}">
      </div>
      <div class="event-info">
        <span class="eyebrow">UPCOMING EVENT</span>
        <h3>${event.title || ""}</h3>
        <p>${event.subtitle || ""}</p>
        <div class="event-meta">
          ${event.date ? `<div>◷ ${event.date}</div>` : ""}
          ${event.time ? `<div>◷ ${event.time}</div>` : ""}
          ${event.location ? `<div>⌖ ${event.location}</div>` : ""}
        </div>
        ${event.price ? `<div class="event-price">${event.price}</div>` : ""}
        ${event.bookingUrl ? `<a class="btn primary" href="${event.bookingUrl}" target="_blank" rel="noopener">BOOK / REGISTER →</a>` : ""}
      </div>`;
    eventGrid.appendChild(card);
  });

  document.querySelector("#main-booking-link").href = activeEvents[0]?.bookingUrl || "#events";
}

function renderSettings(settings) {
  if (!settings) return;

  const phone = settings.phone || "";
  const email = settings.email || "";

  const phoneEl = document.querySelector("#site-phone");
  const emailEl = document.querySelector("#site-email");
  const waEl = document.querySelector("#social-whatsapp");

  if (phoneEl && phone) {
    phoneEl.textContent = phone;
    phoneEl.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
  }
  if (emailEl && email) {
    emailEl.textContent = email;
    emailEl.href = `mailto:${email}`;
  }
  if (waEl && settings.whatsapp) waEl.href = settings.whatsapp;

  const socialMap = [
    ["social-instagram", settings.instagram],
    ["social-facebook", settings.facebook],
    ["social-tiktok", settings.tiktok]
  ];
  socialMap.forEach(([id, url]) => {
    const el = document.querySelector(`#${id}`);
    if (!el) return;
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      // Hide until a real social URL is added in the editor.
      el.style.display = "none";
    }
  });
}

fetch(EVENTS_URL)
  .then(r => r.ok ? r.json() : Promise.reject(new Error("Could not load events.json")))
  .then(renderEvents)
  .catch(err => {
    console.error(err);
    renderEvents([]);
  });

fetch(SETTINGS_URL)
  .then(r => r.ok ? r.json() : Promise.reject(new Error("Could not load site-settings.json")))
  .then(renderSettings)
  .catch(err => console.error(err));

document.querySelector("#year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
document.querySelector(".menu-toggle").addEventListener("click", () => header.classList.toggle("open"));
document.querySelectorAll(".site-header nav a").forEach(a => a.addEventListener("click", () => header.classList.remove("open")));
