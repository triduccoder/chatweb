const { ObjectId } = require("mongodb");
var config = require("./../config/setting.json");
class ProductService{
        databaseConnection = require("./../database/database");
        product = require('../apps/model/product');

        client;
        productDatabase;
        productCollection;
        constructor(){
        this.client = this.databaseConnection.getMongoClient();
        this.productDatabase = this.client.db(config.mongodb.database);
        this.productCollection = this.productDatabase.collection("product");
    }
    async getALlContact() {
     const cursor = await this.productCollection.find({}, {}).skip(0).limit(100);
     return await cursor.toArray();
}
async insertContact(product) {
     return await this.productCollection.insertOne(product);
}
}
module.exports = ProductService;