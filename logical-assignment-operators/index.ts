// Example for logical x ||= y and x &&=y

const article = {
  title: "Hello",
  created_at: null,
};

// Only assign if created_at field value is falsy (the value is null or undefined)
console.log("Falsy value");
// 2023
article.created_at ||= new Date().getFullYear();
console.log("articles.created_at :>> ", article.created_at);

// Only assign if created_at field value is truthy (the value exists or assign before)
console.log("Truthy value");
// 2020
article.created_at &&= new Date().getFullYear() - 3;
console.log("articles.created_at :>> ", article.created_at);

// Example for logical x ??=y

const person = {
  name: null,
  age: undefined,
};

person.name ??= "Thang Cute :)";
person.age ??= 25;
console.log("Nullish value");
console.log("person.name :>> ", person.name);
console.log("person.name :>> ", person.age);
