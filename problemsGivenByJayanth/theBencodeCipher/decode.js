function bencodeToInteger(bencode) {
  const data = parseInt(bencode.slice(1, bencode.length - 1));
  return data;
}

function bencodeToString(bencode) {
  const length = parseInt(bencode);
  const startIndex = (length + "").length + 1;
  return bencode.slice(startIndex, startIndex + length);
}

function lengthOfEveryElemnt(data) {
  let length = 0;
  for (let index = 0; index < data.length; index++) {
    length += typeof data[index] !== "object" ? (data + "").length : lengthOfEveryElemnt(data[index]);
  }
}

function bencodeToList(bencode) {
  const list = [];
  let index = 1;
  while (index < bencode.length - 1) {
    const currentBencode = bencode.slice(index, bencode.length - 1);
    const data = decode(currentBencode);
    list.push(data);
    index += typeof data !== "object" ? (data + "").length + 2 : lengthOfEveryElemnt(data);
  }

  return list;
}

function decode(bencode) {
  if (bencode[0] === 'i') return bencodeToInteger(bencode);
  if (bencode[0] === 'l') return bencodeToList(bencode);
  if (typeof (+bencode[0]) === "number") return bencodeToString(bencode);

  console.log("INVALID DATA !!!");
  return "INVALID DATA !!!";
}

function isArray(x) {
  return typeof x === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

function trueMessage(description) {
  const symbol = "📈";
  const message = symbol + description + "\n";
  console.log(message);
}

function falseMessage(actual, expected, description) {
  const symbol = "📉";
  const actualMessage = "| Actual   : " + actual + "   |\n";
  const expectedMessage = "| Expected : " + expected + "   |\n";
  const result = "| Failed!!! 😬   | \n";
  let message = symbol + description + "\n";
  message += actualMessage + expectedMessage + result;
  console.log(message);
}

function test(description, bencode, expected) {
  const result = decode(bencode);
  const isTestPassed = areDeepEqual(result, expected);
  if (isTestPassed) {
    trueMessage(description);
  } else {
    falseMessage(result, expected, description);
  }
}

function heading(text) {
  const underline = '_'.repeat(text.length);
  console.log(`\n\n${text}\n${underline}\n`);
}

function testDecoding() {
  heading("DECODING");

  heading("BENCODE OF INTEGER TYPE TO INTEGER");
  test("POSITIVE NUMBER", 'i123e', 123);
  test("NEGATIVE NUMBER", 'i-23e', -23);
  test("0", 'i0e', 0);

  heading("BENCODE OF STRING TYPE TO DTRING");
  test("NORMAL STRING", '5:hello', "hello");
  test("STRING WITH SPACE", '11:hello world', "hello world");
  test("EMPTY STRING", '0:', "");
  
  heading("BENCODE OF LIST TYPE");
  test("LIST WITH SAME TYPE OF DATA (STRING)", 'l5:hello5:world7:Welcomee', ["hello", "world", "Welcome"]);
  test("LIST WITH SAME TYPE OF DATA (NUMBER)", 'li123ei-21ei0ee', [123, -21, 0]);
  test("LIST WITH DIFFERENT TYPES OF DATA", 'li123e5:helloi0e0:e', [123, "hello", 0, ""]);
  test("NESTED LISTED", 'li123e5:helloli0e0:ee', [123, "hello", [0, ""]]);
  test("EMPTY LIST", 'le', []);
}

function testAll() {
  testDecoding();
}

testAll();
