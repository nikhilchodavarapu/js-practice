function integerBencode(data) {
  return 'i' + data + 'e';
}

function stringBencode(data) {
  return data.length + ':' + data;
}

function listBencode(data) {
  let bencode = 'l';
  for (let index = 0; index < data.length; index++) {
    bencode += encode(data[index]);
  }
  return bencode + 'e';
}

function encode(data) {
  if (typeof data === 'number') return integerBencode(data);
  if (typeof data === 'string') return stringBencode(data);
  if (typeof data === 'object') return listBencode(data);
  console.log("INVALID DATA !!!");
  return "INVALID DATA !!!";
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

function test(description, data, expected) {
  const result = encode(data);
  const isTestPassed = result === expected;
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

function testEncoding() {
  heading("ENCODING");

  heading("BENCODE OF INTEGER TYPE");
  test("POSITIVE NUMBER", 123, 'i123e');
  test("NEGATIVE NUMBER", -23, 'i-23e');
  test("0", 0, 'i0e');

  heading("BENCODE OF STRING TYPE");
  test("NORMAL STRING", "hello", '5:hello');
  test("STRING WITH SPACE", "hello world", '11:hello world');
  test("EMPTY STRING", "", '0:');
  
  heading("BENCODE OF LIST TYPE");
  test("LIST WITH SAME TYPE OF DATA (STRING)", ["hello", "world", "Welcome"], 'l5:hello5:world7:Welcomee');
  test("LIST WITH SAME TYPE OF DATA (NUMBER)", [123, -21, 0], 'li123ei-21ei0ee');
  test("LIST WITH DIFFERENT TYPES OF DATA", [123, "hello", 0, ""], 'li123e5:helloi0e0:e');
  test("EMPTY LIST", [], 'le');
}

function testAll() {
  testEncoding();
}

testAll();
