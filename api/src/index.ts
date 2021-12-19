import * as dotenv from "dotenv";
dotenv.config();
import "./config/db";
import { Application } from "express";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import authRouter from "./routers/Auth";
import moviesRouter from "./routers/Movies";
import listsRouter from "./routers/Lists";

const app: Application = express();
const port = 5050 || process.env.PORT;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(helmet());
app.use(morgan("common"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/lists", listsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
