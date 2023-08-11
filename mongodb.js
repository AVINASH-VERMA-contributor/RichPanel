const { MongoClient, ServerApiVersion } = require('mongodb');

const encodedPassword=encodeURIComponent(process.env.Mongopassword);

const uri=`mongodb+srv://avinhn02:${encodedPassword}@cluster0.ayrckyu.mongodb.net/?retryWrites=true&w=majority`

    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
    
    async function connectToDatabase(){
        try{    
            await client.connect();
            console.log("connected to mongoDB")
        }
        catch(error){
            console.log(error);
            console.log("Could not connect to mongoDB")
        }
    }

connectToDatabase();