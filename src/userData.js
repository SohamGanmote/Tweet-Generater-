import { createContext } from "react/cjs/react.production.min";

let Data = {
  userName: "Soham Ganmote",
  userTweet: "Hello,World! #Programing",
  isVerified: "1",
};

export const userData = createContext(Data);
