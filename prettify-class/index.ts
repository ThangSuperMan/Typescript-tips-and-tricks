interface Person {
  name: string;
  age: number;
}

type Prettify<T> = {
  [P in keyof T]: T[P];
} & {};

const stranger: Person = {
  name: "Thang",
  age: 21,
};

console.log("stranger :>> ", stranger);

interface Enginner extends Person {
  role: string;
}

interface FrontendEnginner extends Enginner {
  title: string;
}

const enginnerOne: Enginner = {
  name: "Trang",
  age: 21,
  role: "admin",
};

console.log("enginnerOne :>> ", enginnerOne);

// Hover the frontend variable to see the result
const frontend: Prettify<FrontendEnginner> = {
  name: "Kevin",
  title: "Intern",
  age: 22,
  role: "developer",
};

console.log("frontend :>> ", frontend);
