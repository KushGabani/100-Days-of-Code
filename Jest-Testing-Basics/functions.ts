import axios from "axios";

type functionType = {
  add: Function;
  isNull: Function;
  checkValue: Function;
  createUser: Function;
  getString: Function;
  usernames: Function;
  fetchFakeUser: Function;
};

type userModel = {
  firstname?: string;
  lastname?: string;
};

const func: functionType = {
  add: (num1: number, num2: number) => num1 + num2,
  isNull: () => null,
  checkValue: (x: number) => x,
  createUser: () => {
    let user: userModel = {
      firstname: "Kush",
    };
    user["lastname"] = "Gabani";
    return user;
  },
  getString: (str: string) => str,
  usernames: (arr: string[]) => arr,
  fetchFakeUser: async () => {
    const userData: any = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return userData.data;
  },
};

module.exports = func;
