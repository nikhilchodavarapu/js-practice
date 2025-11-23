// INSERT INTO table_name (column1, column2, column3)
// VALUES (value1, value2, value3);

import { syntax } from "./syntaxes.js";

const isInvalid = (parts) => {
  if (
    parts[0] !== syntax.INSERT[0] || parts[1] !== syntax.INSERT[1] ||
    (parts[3] !== syntax.INSERT[4] && parts[4] !== syntax.INSERT[4])
  ) {
    console.log("INVALID");
    return true;
  }

  if (parts[2] === "-") {
    console.log("INVALID");
    return true;
  }
};

const insertIntoTable = (name, cols, values) => {
  if (cols + [] === "") {
    Deno.writeTextFileSync(`database/${name}.txt`, values.join("\t") + '\n', {
      append: true,
    });
  }
};

export const insertData = (input) => {
  let columns = "";
  let userSyntax = "";
  if (input.indexOf("(") !== input.lastIndexOf("(")) {
    columns = input.slice(input.indexOf("("), input.indexOf(")") + 1);
    userSyntax = input.slice(0, input.indexOf(columns)) + "-";
  }
  const values = input.slice(
    input.lastIndexOf("("),
    input.lastIndexOf(")") + 1,
  );
  console.log(columns, values);
  userSyntax += input.slice(
    input.indexOf(columns) + columns.length,
    input.indexOf(values),
  );
  console.log(userSyntax);
  const parts = userSyntax.split(" ");
  if (isInvalid(parts)) {
    return;
  }

  const actualValues = values.slice(1, -1).split(",");
  const actualCols = columns.slice(1, -1).split(",");
  insertIntoTable(parts[2], actualCols, actualValues);
};
