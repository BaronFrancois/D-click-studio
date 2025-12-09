import { Camera, Printer, Image as ImageIcon, Users, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export const TEAM_MEMBERS = [
  {
    name: "Marc",
    role: "Photographe professionnel",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Stéphanie",
    role: "Photographe diplômée",
    subRole: "Portraitiste de France",
    image: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Fabrice",
    role: "Photographe diplômé",
    subRole: "Portraitiste de France",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Jordane",
    role: "Assistant photographe",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
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
    description: "Shooting photos en studio et reportages extérieurs pour tous vos événements.",
    icon: Camera,
    items: [
      "Mariage & Reportages",
      "Grossesse & Naissance",
      "Mode & Book",
      "Portrait d'Entreprise",
      "Événements privés & professionnels"
    ]
  },
  {
    title: "Le Labo",
    description: "Traitement d'images, développement et tirages sur tous supports.",
    icon: Printer,
    items: [
      "Développement Argentique & Numérique",
      "Tirages Géants (Traceur 1 mètre de large)",
      "Restauration de photos anciennes",
      "Conception de Livres Photos",
      "Borne tirage immédiat (Smartphone & Réseaux)"
    ]
  }
];

export const CONTACT_INFO = {
  address: "22 Rue Saint Michel - 88000 EPINAL",
  phone: "03 29 35 15 32",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=22+Rue+Saint+Michel+88000+EPINAL"
};