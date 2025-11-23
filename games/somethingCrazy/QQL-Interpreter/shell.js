import { createTable } from "./src/create-table.js";
import { insertData } from "./src/insert-data.js";

const shell = () => {
  console.clear();
  const input = prompt(">");
  const parts = input.toUpperCase().split(" ");
  if (parts[0] === 'CREATE') {
    createTable(parts);
  }

  if (parts[0] === 'INSERT') {
    insertData(parts.join(" "));
  }
}

shell();
