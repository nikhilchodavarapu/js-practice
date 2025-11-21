import { createTable } from "./create-record.js";
import { synatx } from "./database.js";

const shell = () => {
  console.clear();
  let input = prompt(">");
  const parts = input.toUpperCase().split(" ");
  if (parts[0] === 'CREATE') {
    createTable(parts);
  }
}

shell();