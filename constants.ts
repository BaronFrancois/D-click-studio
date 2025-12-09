import { Camera, Printer, Image as ImageIcon, Users, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export const TEAM_MEMBERS = [
  {
    name: "Marc",
    role: "Photographe Professionnel",
    image: "https://picsum.photos/400/500?grayscale&random=1"
  },
  {
    name: "Stéphanie",
    role: "Photographe diplômée",
    subRole: "Portraitiste de France",
    image: "https://picsum.photos/400/500?grayscale&random=2"
  },
  {
    name: "Fabrice",
    role: "Photographe diplômé",
    subRole: "Portraitiste de France",
    image: "https://picsum.photos/400/500?grayscale&random=3"
  },
  {
    name: "Jordane",
    role: "Assistant photographe",
    image: "https://picsum.photos/400/500?grayscale&random=4"
  }
];

export const SERVICE_AREAS = [
  { region: "VOSGES (88)", cities: "Epinal, Saint-Dié-des-Vosges, Gérardmer, Golbey, Remiremont, Neufchâteau, Mirecourt" },
  { region: "MOSELLE (57)", cities: "Metz, Thionville, Saint-Avold" },
  { region: "MEURTHE ET MOSELLE (54)", cities: "Nancy, Lunéville, Toul, Pont-à-Mousson" },
  { region: "MEUSE (55)", cities: "Bar-le-Duc, Verdun, Commercy" },
  { region: "HAUTE MARNE (52)", cities: "Chaumont, Langres" },
  { region: "BAS RHIN (67)", cities: "Strasbourg, Haguenau" },
  { region: "HAUTE SAONE (70)", cities: "Vesoul, Gray" },
];

export const SERVICES = [
  {
    title: "Le Studio",
    description: "Shooting photo professionnel pour immortaliser vos moments.",
    icon: Camera,
    items: [
      "Mariage & Événements",
      "Grossesse & Naissance",
      "Mode & Book",
      "Portrait Corporate",
      "Événements privés"
    ]
  },
  {
    title: "Le Labo",
    description: "Développement et tirage de haute qualité sur place.",
    icon: Printer,
    items: [
      "Développement Argentique",
      "Tirages Grand Format (1m+)",
      "Restauration photos anciennes",
      "Livres Photos",
      "Borne tirage immédiat"
    ]
  }
];

export const CONTACT_INFO = {
  address: "22 Rue Saint Michel - 88000 EPINAL",
  phone: "03 29 35 15 32",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=22+Rue+Saint+Michel+88000+EPINAL"
};