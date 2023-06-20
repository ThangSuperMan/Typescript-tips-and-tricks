// Good name for readability
type Route = "/user" | "/admin/user" | "/admin";

const ALLOW_ROUTES: Route[] = ["/user", "/admin"];

// Interface
// It will be confused if we use T, U, V,...
// Insted of TData, TError
export type Response<TData, TError> = {
  data: TData;
  error: TError;
};

const response: Response<
  { username: string; password: string },
  { errorMessage: string }
> = {
  data: { username: "thangphan", password: "password" },
  error: { errorMessage: "Super difficult error" },
};

console.log("response :>> ", response);
