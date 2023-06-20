// Tip 1: Passing types to other types!
type MyGenericType<TData> = {
  data: TData;
};

type Example1 = MyGenericType<{ firstName: string }>;
//  ^?

const helloExample1: Example1 = {
  data: { firstName: "Thang Handsome" },
};

const sum = (a: number, b: number) => {
  return a + b;
};

// Tip 2: Passing types to your own functions

// Generic function
const makeFetch = async <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res: Response) => res.json());
};

makeFetch<{ firstName: string; lastName: string; age: number }>(
  "/api/endpoint"
).then(
  // Old when does not use the generic (just look so unconsistently)
  // (res: { firstName: string; lastName: string }) => {
  //   console.log("res :>> ", res);
  // }

  // New
  (res) => {
    // Why I use ^? -> this is a look up type plugins on vscode or neovim
    //  ^?
    // Now you have code completion for res object :)
    console.log("res.firstName :>> ", res.firstName);
    console.log("res.lastName :>> ", res.lastName);
    console.log("res.age :>> ", res.age);
    console.log("res :>> ", res);
  }
);

export {};
