const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

test("Returns value is not null", async () => {
  const trivialKey = deterministicPartitionKey({ partitionKey: "hgdfhs" })
  expect(trivialKey).not.toBe(null);
});

test("Returns value is not undefined", async () => {
  const trivialKey = deterministicPartitionKey({ partitionKey: "hgdfhs" })
  expect(trivialKey).not.toBe(undefined);
});

test("Returns value is of string type", async () => {
  const trivialKey = deterministicPartitionKey({ partitionKey: "hgdfhs" })
  expect(typeof trivialKey).toBe("string");
});

test("Returns value is of string type when event/argument is undefined", async () => {
  const trivialKey = deterministicPartitionKey()
  expect(typeof trivialKey).toBe("string");
});

test("Returns value is of string type when argument is integer 0", async () => {
  const trivialKey = deterministicPartitionKey()
  expect(typeof trivialKey).toBe("string");
});