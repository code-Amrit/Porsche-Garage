const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://RaiderBoyzzz:Plutono1@clusterporsche.zl83due.mongodb.net/Garage?retryWrites=true&w=majority&appName=Clusterporsche";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("----", err);
      else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection("GItems");
        fetched_data.find({}).toArray(async function (err, data) {
        
            const GCategory = await mongoose.connection.db.collection("GCategory");
            GCategory.find({}).toArray(function (err, catData){

                if (err) console.log(err);
                else {
                   global.GItems = data;
                   global.GCategory = catData;
            }
         })
          
        //     if (err) console.log(err);
        //   else {
        //     global.GItems = data;
            
        //   }
        });
      }
    }
  );
};
module.exports = mongoDB;
