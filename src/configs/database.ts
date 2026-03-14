import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer: MongoMemoryServer;

export const connectDB = async () => {
  const useMemory = process.env.USE_MEMORY_DB === "true";

  if (useMemory) {
    // Starts the MongoDB server in memory.
    try {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();

      await mongoose.connect(uri);
      console.log("🚀 MongoDB em Memória conectado para testes!");
    } catch (error) {
      console.error("Erro ao iniciar MongoDB em memória:", error);
      process.exit(1);
    }
  } else {
    // Connection with Atlas
    try {
      await mongoose.connect(process.env.MONGO_URI!);
      console.log("🍃 MongoDB Atlas conectado!");
    } catch (error) {
      console.error("Erro ao conectar ao MongoDB:", error);
      process.exit(1);
    }
  }
};

// Database closing function
export const disconnectDB = async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
};

export default connectDB;
