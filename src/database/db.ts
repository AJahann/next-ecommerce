import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }

    await mongoose.connect('mongodb://localhost:27017/e-commerce');
    console.log('Connected To DB Successfully :))');
  } catch (err) {
    console.log('Error in DB Connection =>', err);
  }
};

export default connectToDB;
