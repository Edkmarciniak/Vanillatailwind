import card from "./components/Card";
import card from "./components/Main";
import card from "./components/Search";

const root = documents.getElementById("root");

root.innerHTML = `
  ${Main()}
  ${Card()}
  ${Search()}
  `;
