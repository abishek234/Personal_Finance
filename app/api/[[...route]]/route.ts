import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from 'hono/cors';

import accounts from "./accounts";
import categories from "./categories";
import summary from "./summary";
import transactions from "./transactions";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use(cors());


app.get('/', (e: { json: (arg0: { message: string; }) => any; }) => e.json({ message: 'Hello from Hono!' }));

const routes = app
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/summary", summary)
  .route("/transactions", transactions);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
