const functions = require("./functions");

test("Add two numbers (true)", () => {
  const actual = functions.add(2, 2);
  const expected = 4;

  expect(actual).toBe(expected);
});

test("Add two Numbers (false)", () => {
  const actual = functions.add(2, 2);
  const expected = 5;

  expect(actual).not.toBe(expected);
});

test("Is less than 1600? (true)", () => {
  const actual = functions.add(800, 600);
  const expected = 1600;

  expect(actual).toBeLessThan(expected);
});

test("Is less than 1600? (false)", () => {
  const actual = functions.add(800, 800);
  const expected = 1600;

  expect(actual).not.toBeLessThan(expected);
});

test("Returns null?", () => {
  const actual = functions.isNull();
  expect(actual).toBeNull();
});

test("Should be a Truthy", () => {
  const actual = functions.checkValue(5);
  expect(actual).toBeTruthy();
});

test("Should be a Falsy", () => {
  const actual = functions.checkValue(null);
  expect(actual).toBeFalsy();
});

test("create new user with name 'Kush Gabani' ", () => {
  const actual = functions.createUser();
  expect(actual).toEqual({
    firstname: "Kush",
    lastname: "Gabani",
  });
});

test("There-is-no-I-in-team check. (true)", () => {
  const actual = functions.getString("team");
  expect(actual).not.toMatch(/I/i);
});

test("'admin' in usernames check. (true)", () => {
  const actual = functions.usernames([
    "sampleuser",
    "kush",
    "kgabani",
    "admin",
  ]);
  expect(actual).toContain("admin");
});

test("'admin' in usernames check. (false)", () => {
  const actual = functions.usernames(["sampleuser", "kush", "kgabani"]);
  expect(actual).not.toContain("admin");
});

test("Fetch fake user named 'Leanne Graham' with Promise (true)", () => {
  expect.assertions(1);
  return functions
    .fetchFakeUser()
    .then((data: any) => {
      expect(data.name).toEqual("Leanne Graham");
    })
    .catch((error: string) => console.log(error));
});

test("Fetch fake user named 'Leanne Graham' with async await (true)", async () => {
  expect.assertions(1);
  const data: any = await functions.fetchFakeUser();
  expect(data.name).toEqual("Leanne Graham");
});
