const mongoose=require('mongoose');

const connectDB= async()=>{
    // const connectionParams={
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true ,
    //     useFindAndModify:false
    // }
  console.log(process.env.MONGO_URI);
   try{

    const con=await mongoose.connect( process.env.MONGO_URI );
    console.log(`Mongodb connected:${con.connection.host}`);
    // console.log("connection made");
   }catch(err){
       console.log(err);
       process.exit(1);
   }

}

module.exports=connectDB