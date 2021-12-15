type SliderItemType = {
  id: number;
  photoURL: string;
};

type CatType = { id: number; photoURL: string; link: string };
export type MovieType = CatType;
type FooterType = {
  id: number;
  link: string;
  name: string;
};

export const sliderItem: SliderItemType[] = [
  {
    id: 1,
    photoURL:
      "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 2,
    photoURL:
      "https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    photoURL:
      "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
  },
  {
    id: 4,
    photoURL:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
];

export const catItems: CatType[] = [
  {
    id: 1,
    photoURL: process.env.PUBLIC_URL + "/assets/DisneyLogo.png",
    link: "/yes",
  },
  {
    id: 2,
    photoURL: process.env.PUBLIC_URL + "/assets/MarvelLogo.png",
    link: "/yes",
  },
  {
    id: 3,
    photoURL: process.env.PUBLIC_URL + "/assets/NGLogo.png",
    link: "/yes",
  },
  {
    id: 4,
    photoURL: process.env.PUBLIC_URL + "/assets/PixarLogo.png",
    link: "/yes",
  },
  {
    id: 5,
    photoURL: process.env.PUBLIC_URL + "/assets/StarWarsLogo.png",
    link: "/yes",
  },
  {
    id: 6,
    photoURL: process.env.PUBLIC_URL + "/assets/StarLogo.png",
    link: "/yes",
  },
];

export const movieListItems: MovieType[] = [
  {
    id: 1,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/12",
  },
  {
    id: 2,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/14",
  },
  {
    id: 3,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/15",
  },
  {
    id: 4,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/19",
  },
  {
    id: 5,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/20",
  },
  {
    id: 6,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/39",
  },
  {
    id: 7,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/36",
  },
  {
    id: 8,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/109",
  },
  {
    id: 9,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/376",
  },
  {
    id: 10,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/1986",
  },
  {
    id: 11,
    photoURL:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    link: "/movies/1368",
  },
];

export const footerLinks: FooterType[] = [
  {
    id: 1,
    link: "/",
    name: "Règle de respect de la vie privée",
  },
  {
    id: 2,
    link: "/",
    name: "Modalités relatives aux cookies",
  },
  {
    id: 3,
    link: "/",
    name: "Droits Données dans l'UE et au R-U",
  },
  {
    id: 4,
    link: "/",
    name: "A propos de Disney+",
  },
  {
    id: 5,
    link: "/",
    name: "Condition générale d'abonnement",
  },
  {
    id: 6,
    link: "/",
    name: "Aide",
  },
  {
    id: 7,
    link: "/",
    name: "Appareils compatible",
  },
  {
    id: 8,
    link: "/",
    name: "A propos de Disney+",
  },
];
