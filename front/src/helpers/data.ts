import { MovieType } from "../context/movieSlice";

type SliderItemType = {
  id: number;
  photoURL: string;
};
type CatType = { id: number; photoURL: string; link: string };

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
    link: "/cat?cat__query=disney",
  },
  {
    id: 2,
    photoURL: process.env.PUBLIC_URL + "/assets/MarvelLogo.png",
    link: "/cat?cat__query=marvel",
  },
  {
    id: 3,
    photoURL: process.env.PUBLIC_URL + "/assets/NGLogo.png",
    link: "//cat?cat__query=ng",
  },
  {
    id: 4,
    photoURL: process.env.PUBLIC_URL + "/assets/PixarLogo.png",
    link: "/cat?cat__query=pixar",
  },
  {
    id: 5,
    photoURL: process.env.PUBLIC_URL + "/assets/StarWarsLogo.png",
    link: "/cat?cat__query=starwars",
  },
  {
    id: 6,
    photoURL: process.env.PUBLIC_URL + "/assets/StarLogo.png",
    link: "/cat?cat__query=star",
  },
];

export const movieListItems: MovieType[] = [
  {
    _id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "2",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "4",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "5",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "6",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "7",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "8",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "9",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
  },
  {
    _id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1639290829571-f72eedf46efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    desc: "",
    videoURL: "",
    isSeries: false,
    ageLimit: 10,
    genre: ["fantasy"],
    category: "disney",
    duration: 190,
    year: 2000,
    title: "OUAIS",
    type: "film",
    bigPicture: "",
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
