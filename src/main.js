import { readFileSync, writeFileSync } from "fs";

const images = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png",
  "./images/7.png",
  "./images/8.png",
];

const dayOfMonth = new Date().getDate();
const selectedImage = images[dayOfMonth % images.length];

let readme = readFileSync("README.md", "utf8");

const imageRegex = /!\[Header\]\(.\/images\/\d+\.png\)/g;

const newReadme = readme.replace(imageRegex, `![Header](${selectedImage})`);

writeFileSync("README.md", newReadme);
