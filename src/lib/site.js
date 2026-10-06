const BASE = "https://media.base44.com/images/public/6ac51c436c2e8036464e2462/";

export const IMAGES = {
  hero: `${BASE}6bbdc0f26_generated_cccb6ac8.jpg`,
  rines: `${BASE}29d42c935_generated_9f5f159e.jpg`,
  llantas: `${BASE}226a579c0_generated_ad167d40.jpg`,
  audio: `${BASE}5ff25566d_generated_5cc8cf4b.jpg`,
  motor: `${BASE}fe767c11f_generated_d92c834e.jpg`,
  detailing: `${BASE}c7c4efd48_generated_d9613eba.jpg`,
  taller: `${BASE}fb974667c_generated_89393345.jpg`,
  sedan: `${BASE}34aa48760_generated_5ce6234c.jpg`,
  suv: `${BASE}3fbbd4f16_generated_6a8ca407.jpg`,
  carbono: `${BASE}ed04685f5_generated_bc0f24df.jpg`,
};

export const CONTACT = {
  address: ["Periférico Paseo de la República #120", "Col. Elías Pérez Avalos, C.P. 58218", "Morelia, Michoacán, México"],
  telefonoDisplay: "01 (443) 315 4180",
  telefonoRaw: "+524433154180",
  whatsapp: "524435043752",
  stations: [
    { name: "Pico", role: "Información para Autos", phone: "443 504 3752", raw: "524435043752" },
    { name: "Berna", role: "Rines, llantas y servicio", phone: "443 282 9204", raw: "524432829204" },
    { name: "Memo Tops", role: "Rines, llantas y servicio", phone: "443 156 3073", raw: "524431563073" },
  ],
};

export const MAPS_EMBED =
  "https://www.google.com/maps?q=Perif%C3%A9rico%20Paseo%20de%20la%20Rep%C3%BAblica%20120%2C%20El%C3%ADas%20P%C3%A9rez%20%C3%81valos%2C%2058218%20Morelia%2C%20Michoac%C3%A1n&z=15&output=embed";

export const waLink = (phone, text) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;