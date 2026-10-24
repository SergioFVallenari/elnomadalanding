export const site = {
  name: 'Posada El Nómada',
  location: 'La Serranita, Córdoba, Argentina',
  bookingUrl: 'https://reservas.posadaelnomada.com.ar/disponibilidad/posada-el-nomada',
  whatsappNumber: '', // Falta el número
  whatsappMessage:
    '¡Hola! Quería consultar por disponibilidad en Posada El Nómada.',
  mapsUrl: 'https://maps.app.goo.gl/7RsX3vjwWFSwSGLi7',
  description:
    'Tu parada en el camino. Un lugar para descansar, compartir historias y disfrutar las sierras.',
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
