// Informations centralisées pour le site
export const CONTACT_INFO = {
  phone: "+33 6 12 16 93 20",
  email: "brem.collection@gmail.com",
  whatsapp: "33612169320",
  address: {
    full: "2 Avenue Charles de Gaulle, 06240 Beausoleil, France",
    building: "Palais Florentin – Palais Joséphine",
    street: "2 Avenue Charles de Gaulle",
    city: "06240 Beausoleil",
    country: "France"
  }
} as const;

export const LOCATION_HIGHLIGHTS = [
  {
    title: "Casino de Monte-Carlo",
    distance: "500m",
    time: "6 min à pied",
    description: "Accès direct au cœur du luxe monégasque"
  },
  {
    title: "Café de Paris",
    distance: "500m", 
    time: "6 min à pied",
    description: "Brasserie emblématique de Monte-Carlo"
  },
  {
    title: "Plages",
    distance: "950m",
    time: "15 min à pied", 
    description: "Plages privées et publiques"
  },
  {
    title: "Gare de Monaco",
    distance: "950m",
    time: "15 min à pied",
    description: "Liaison directe avec la France et l'Italie"
  },
  {
    title: "Aéroport Nice",
    distance: "31km",
    time: "30 min en voiture",
    description: "Héliport de Monaco à 10 min"
  },
  {
    title: "Centre de Monaco", 
    distance: "500m",
    time: "8 min à pied",
    description: "Palais Princier et Rocher de Monaco"
  }
] as const;

export const PROPERTY_INFO = {
  name: "Palais Florentin",
  subtitle: "Beausoleil • Monaco",
  description: "Appartement de prestige avec vue mer panoramique au cœur de la Riviera. Location courte durée haut de gamme à proximité du Casino de Monte-Carlo.",
  address: CONTACT_INFO.address,
  mapUrl: "https://www.google.com/maps?q=2%20Avenue%20Charles%20de%20Gaulle%2C%2006240%20Beausoleil%2C%20France&output=embed",
  directionsUrl: "https://www.google.com/maps?daddr=2+Avenue+Charles+de+Gaulle,+06240+Beausoleil,+France"
} as const;