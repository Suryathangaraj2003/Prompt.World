import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://suryathangaraj95:suryathangaraj95@cluster0.arfb5r7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "share_prompt",
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useUnifiedTopology:true,
      // useNewUrlParser: true,
       //     useCreateIndex: true
     
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}