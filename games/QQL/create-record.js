// CREATE TABLE table_name (
//   id int, 
//   name varchar,
//   age int
// )

import { synatx } from "./database.js"

export const createTable = (parts) => {
  if (parts[0] !== synatx.CREATE[0] || parts[1] !== synatx.CREATE[1] || !parts[parts.length - 1].includes('(')) {
    console.log("TABLE CREATE CHEYYATAM RADHA RA ****");
    return;
  }

  let input = prompt('\t');
  let columns = input;
  while (!input.includes(');') && input.includes(',')) {
    input = prompt('\t');
    columns += input
  }

  if (!input.includes(');') && !input.includes(',')) {
    console.log('Comma (,) is required after every line')
  }

  console.log(columns);
}