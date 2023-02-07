import { displayAuctions } from "./display.mjs";

export async function getAuctions(url) {
  console.log(url);

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    displayAuctions(json);
  } catch (error) {
    console.log(error);
  }
}
