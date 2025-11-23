// CREATE TABLE table_name (
//   id int,
//   name varchar,
//   age int
// )

import { syntax } from "./syntaxes.js";

const addTable = (name, columns) => {
  console.log(columns);
  const data = columns.join("\t");
  Deno.writeTextFileSync(`database/${name}.txt`, data + '\n');
};

export const createTable = (parts) => {
  if (
    parts[0] !== syntax.CREATE[0] || parts[1] !== syntax.CREATE[1] ||
    !parts[parts.length - 1].includes("(")
  ) {
    console.log("TABLE CREATE CHEYYATAM RADHA RA ****");
    return;
  }

  let input = prompt("\t");
  let columns = input + "\n";
  while (!input.includes(";") && input.includes(",")) {
    input = prompt("\t");
    columns += input + "\n";
  }

  if (!input.includes(";") && !input.includes(",")) {
    console.log("Comma (,) is required after every line");
  }

  const separated = columns.split("\n");
  const separatedColumns = separated.slice(0, separated.length - 2)
    .map((x) => x.trim())
    .map((x) => x.slice(0, x.length - 1));
  console.log(separatedColumns);
  separatedColumns.forEach((element) => {
    if (!syntax.valid_data_types.includes(element.split(" ")[1])) {
      console.log("INAVLID DATA TYPE");
      return;
    }
  });

  const columnsWithTypes = separatedColumns.map((x) => x.split(" ")).map((x) =>
    x.join("-")
  );
  addTable(parts[2], columnsWithTypes);
};
