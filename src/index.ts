import "module-alias/register";
import "source-map-support/register";
import dotenv from "dotenv-safe";
import add from "@src/math/add";

dotenv.config();

const a = add(2, 3);

console.log(a);
console.log(process.env.NAME);
