import mongoose from "mongoose";

export const Connection = async (userName,password) => {
  const URL = `mongodb+srv://${userName}:${password}@newcrud.ek7v7k2.mongodb.net/learningnewcrud?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      UseUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("data base connected Successfully !");
  } catch (err) {
    console.log("error while connecting to data base !");
  }
};
