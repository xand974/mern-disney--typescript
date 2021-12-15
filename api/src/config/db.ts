import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/DisneyDB")
  .then(() => {
    console.log("db is connected");
  })
  .catch((err: string) => {
    console.log(err);
  });
