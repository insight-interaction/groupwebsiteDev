// define person type
export type Person = {
  name: string;
  role: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate";
  profile: string;
  alter: string;
  url: string;
  year: number;
};

// define alum type
export type Alum = {
  name: string;
  prev: "Postdoc" | "PhD Student" | "Undergraduate";
  now: string;
  profile: string;
  url: string;
  year: number;
};

export const people: Person[] = [
  {
    name: "Martin Wattenberg",
    role: "Professor",
    profile: "martin.jpeg",
    alter: "martin.png",
    url: "https://www.bewitched.com/",
    year: 2021,
  },
  {
    name: "Fernanda Viégas",
    role: "Professor",
    profile: "fernanda.jpg",
    alter: "fernanda.png",
    url: "http://www.fernandaviegas.com/",
    year: 2021,
  },
  {
    name: "Yida Chen",
    role: "PhD Student",
    profile: "yida.jpg",
    alter: "yida.jpg",
    url: "https://yc015.github.io/",
    year: 2022,
  },
  {
    name: "Andrew Lee",
    role: "Postdoc",
    profile: "andrew.jpg",
    alter: "andrew.png",
    url: "https://ajyl.github.io/about",
    year: 2024,
  },
  {
    name: "Kenneth Li",
    role: "PhD Student",
    profile: "kenneth.jpeg",
    alter: "kenneth.png",
    url: "https://likenneth.github.io/",
    year: 2021,
  },
  {
    name: "Shivam Raval",
    role: "PhD Student",
    profile: "shivam.png",
    alter: "shivam.png",
    url: "https://shivam-raval96.github.io/",
    year: 2019,
  },
  {
    name: "Aoyu Wu",
    role: "Postdoc",
    profile: "aoyu.jpg",
    alter: "aoyu.jpeg",
    url: "https://wowjyu.github.io/",
    year: 2022,
  },
  {
    name: "Catherine Yeh",
    role: "PhD Student",
    profile: "catherine.jpg",
    alter: "catherine.jpg",
    url: "https://catherinesyeh.github.io/",
    year: 2022,
  },
  {
    name: "Trevor DePodesta",
    role: "Undergraduate",
    profile: "trevor.jpg",
    alter: "trevor.png",
    url: "https://tdepodesta.github.io/",
    year: 2022,
  },
  {
    name: "Olivia Seow",
    role: "PhD Student",
    profile: "olivia.jpeg",
    alter: "olivia.jpg",
    url: "https://www.oliviaseow.com/",
    year: 2023,
  },
  {
    name: "Lena Armstrong",
    role: "PhD Student",
    profile: "lena.png",
    alter: "lena.png",
    url: "https://lenaarmstrong.github.io/",
    year: 2024,
  },
  {
    name: "Rachit Bansal",
    role: "PhD Student",
    profile: "rachit.jpg",
    alter: "rachit.png",
    url: "https://rachitbansal.github.io",
    year: 2024,
  },
  {
    name: "Oam Patel",
    role: "Undergraduate",
    profile: "oam.png",
    alter: "oam.png",
    url: "https://oampatel.com/",
    year: 2023,
  },
  {
    name: "Jan Riecke",
    role: "Undergraduate",
    profile: "jan.jpg",
    alter: "jan.jpg",
    url: "https://linkedin.com/in/jan-riecke-835689255/",
    year: 2023,
  },
  {
    name: "Nikola Jurkovic",
    role: "Undergraduate",
    profile: "nikola.png",
    alter: "nikola.png",
    url: "https://nikolajurkovic.com/",
    year: 2024,
  },
];

// ALUMNI
export const alumni: Alum[] = [
  {
    name: "David Bau",
    prev: "Postdoc",
    now: "Professor @ Northeastern",
    profile: "david.jpg",
    url: "http://davidbau.com/research/",
    year: 2022,
  },
  {
    name: "Cynthia Chen",
    prev: "Undergraduate",
    now: "SWE @ Decagon",
    profile: "cynthia.jpeg",
    url: "https://chenxcynthia.github.io/",
    year: 2024,
  },
];
