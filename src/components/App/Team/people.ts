// define person type
export type Person = {
  name: string;
  role: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate";
  profile: string;
  alter: string;
  url: string;
};

// define alum type
export type Alum = {
  name: string;
  prev: "Professor" | "Postdoc" | "PhD Student" | "Undergraduate";
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
  },
  {
    name: "Fernanda Viégas",
    role: "Professor",
    profile: "fernanda.jpg",
    alter: "fernanda.png",
    url: "http://www.fernandaviegas.com/",
  },
  {
    name: "Yida Chen",
    role: "PhD Student",
    profile: "yida.jpg",
    alter: "yida.jpg",
    url: "https://yc015.github.io/",
  },
  {
    name: "Cynthia Chen",
    role: "Undergraduate",
    profile: "cynthia.jpeg",
    alter: "cynthia.png",
    url: "https://chenxcynthia.github.io/",
  },
  {
    name: "Kenneth Li",
    role: "PhD Student",
    profile: "kenneth.jpeg",
    alter: "kenneth.png",
    url: "https://likenneth.github.io/",
  },
  {
    name: "Shivam Raval",
    role: "PhD Student",
    profile: "shivam.png",
    alter: "shivam.png",
    url: "https://scholar.harvard.edu/shivamraval",
  },
  {
    name: "Aoyu Wu",
    role: "Postdoc",
    profile: "aoyu.jpg",
    alter: "aoyu.jpeg",
    url: "https://wowjyu.github.io/",
  },
  {
    name: "Catherine Yeh",
    role: "PhD Student",
    profile: "catherine.jpg",
    alter: "catherine.jpg",
    url: "https://catherinesyeh.github.io/",
  },
  {
    name: "Trevor DePodesta",
    role: "Undergraduate",
    profile: "trevor.jpg",
    alter: "trevor.png",
    url: "https://tdepodesta.github.io/",
  },
  {
    name: "Olivia Seow",
    role: "PhD Student",
    profile: "olivia.jpeg",
    alter: "olivia.jpg",
    url: "https://www.oliviaseow.com/",
  },
  {
    name: "Oam Patel",
    role: "Undergraduate",
    profile: "oam.png",
    alter: "oam.png",
    url: "https://oampatel.com/",
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
];
