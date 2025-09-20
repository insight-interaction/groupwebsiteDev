// define person type
export type Person = {
  name: string;
  role: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate" | "Affiliate";
  profile: string;
  alter: string;
  url: string;
  year: number;
};

// define alum type
export type Alum = {
  name: string;
  prev: "Postdoc" | "PhD Student" | "Undergraduate" | "Affiliate";
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
    role: "PhD Student",
    profile: "trevor.png",
    alter: "trevor.png",
    url: "https://tdepodesta.com/",
    year: 2025,
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
    name: "Naomi Saphra",
    role: "Affiliate",
    profile: "naomi.png",
    alter: "naomi.jpg",
    url: "https://nsaphra.net/",
    year: 2023,
  },
  {
    name: "Victoria Li",
    role: "Undergraduate",
    profile: "victoria.jpg",
    alter: "victoria.jpg",
    url: "http://victoriarli.com/",
    year: 2024,
  },
  {
    name: "Helena Vasconcelos",
    role: "PhD Student",
    profile: "helena.png",
    alter: "helena.jpg",
    url: "https://helenavasc.com/",
    year: 2025,
  },
  {
    name: "Usha Bhalla",
    role: "Affiliate",
    profile: "usha.jpg",
    alter: "usha.jpg",
    url: "https://ushabhalla.github.io/",
    year: 2023,
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
  {
    name: "Kenneth Li",
    prev: "PhD Student",
    now: "Researcher @ Meta",
    profile: "kenneth.jpeg",
    url: "https://likenneth.github.io/",
    year: 2025,
  },
];
