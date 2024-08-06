
import mongoose from "mongoose";
const connectDatabase = async (DB_URL) => {
  console.log(process.env.DB_URI,"bawa");
  mongoose
    .connect(DB_URL)
    .then((data) => {
      console.log(`Mongodb connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

export default connectDatabase;
