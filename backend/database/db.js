const mongoose = require("mongoose");
const uri =
  "mongodb+srv://mtokus:Mamii007@cluster0.9hxuxa7.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
  mongoose
    .connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("MongoDb bağlantısı başarılı"))
    .catch((err) => console.log("Bağlantı hatası" + err.massage));
};
module.exports = connection;
