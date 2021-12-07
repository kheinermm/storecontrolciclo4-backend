const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "storecontrolc4";
const hostdb = "cluster0.bhqtr.mongodb.net";
const userdb = "misiontic2022";
const passdb = "xdKk82aY7dMmqs2s";

exports.mongoConnect = () => {
    //LOCAL
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    //REMOTO
    //const mongoStringConnection = `mongodb+srv://${userdb}:${passdb}@${hostdb}/${db}?retryWrites=true&w=majority`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"mongodb connection error"))
}