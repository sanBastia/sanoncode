export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Pesanan Khusus dari FUJIBOX",
    year: 2023,
    description:
      "Customade box service by Fujibox that help brands or retails in printing and packaging needs",
    url: "https://pesanankhusus.fujiboxglobal.com/",
  },
  {
    title: "FUJIBOX legacy",
    year: 2022,
    description:
      "A semi-commerce by Fujibox that sell packaging product for retails in baking industry",
    url: "https://legacy.fujiboxglobal.com/",
  },
  {
    title: "Import Plus",
    year: 2024,
    description:
      "Solution for Import things !",
    url: "https://importplus.id",
  },
  {
    title: "Vocca",
    year: 2024,
    description:
      "chat app that breaking the language barrier !",
    url: "https://vocca.id",
  },
];
