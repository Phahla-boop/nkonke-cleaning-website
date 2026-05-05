export const defaultServices = [
  {
    title: "Cleaning Personnel On Site",
    text: "Reliable on-site teams for events, venues, offices, and commercial spaces.",
  },
  {
    title: "Spill Response",
    text: "Fast cleanup support for spills and unexpected messes.",
  },
  {
    title: "Waste Management",
    text: "Organized waste handling solutions for cleaner operations.",
  },
  {
    title: "Emergency Response",
    text: "Quick-response cleaning assistance when urgent situations need attention.",
  },
  {
    title: "Furniture Reset",
    text: "Professional resetting and arrangement of furniture before and after events.",
  },
  {
    title: "Deep Floor Care",
    text: "Detailed floor cleaning and treatment for a polished finish.",
  },
];

export const defaultContact = {
  phone: "074 623 7153 / 067 576 7686",
  email: "info@nkonkegroup.co.za",
  address: "477 Smith Street, Durban, KwaZulu-Natal",
};

export const defaultGallery = [
  { title: "Our Professional Team" },
  { title: "Team at Work" },
  { title: "Company Uniform & Branding" },
  { title: "Deep Floor Cleaning" },
  { title: "On-Site Cleaning Work" },
  { title: "Outdoor Maintenance" },
];

export function getServices() {
  return JSON.parse(localStorage.getItem("services")) || defaultServices;
}

export function saveServices(data) {
  localStorage.setItem("services", JSON.stringify(data));
}

export function getContact() {
  return JSON.parse(localStorage.getItem("contact")) || defaultContact;
}

export function saveContact(data) {
  localStorage.setItem("contact", JSON.stringify(data));
}

export function getGallery() {
  return JSON.parse(localStorage.getItem("gallery")) || defaultGallery;
}

export function saveGallery(data) {
  localStorage.setItem("gallery", JSON.stringify(data));
}