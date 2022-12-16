import Card from "./components/Card";
import Main from "./components/Main";
import Search from "./components/Search";

const root = document.getElementById("root");

root.innerHTML = `
  ${Main()}
  ${Card()}
  ${Search()}
`;
