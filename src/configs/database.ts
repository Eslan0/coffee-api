import mongoose, { ConnectOptions, Error } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { envConfig } from "./variables";

let mongoServer: MongoMemoryServer;

// MongoDB connection function (real or in memory)
export const connectDB = async () => {
  const useMemory = envConfig.USE_MEMORY_DB === "true";

  if (useMemory) {
    // using in-memory MongoDB for testing
    try {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();

      await mongoose.connect(uri)
      console.log("🚀 MongoDB em Memória conectado para testes!");
    } catch (error) {
      console.error("Erro ao iniciar MongoDB em memória:", error);
      process.exit(1);
    }
  } else {
    // using real MongoDB for production
    try {
      const MONGO_URI = envConfig.MONGO_URI;
      
      if (!MONGO_URI) { // check if MONGO_URI is defined
        throw new Error("ERRO FATAL: MONGO_URI não encontrada no arquivo .env");
      }

      await mongoose.connect(MONGO_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);

      console.log("🍃 MongoDB Atlas conectado!");

      // event listing
      mongoose.connection.on("connected", () => {
        if (envConfig.NODE_ENV === "development") {
          console.log("Conexão de banco de dados MongoDB estabelecida com sucesso");
        }
      });

      mongoose.connection.on("reconnected", () => {
        if (envConfig.NODE_ENV === "development") {
          console.log("Conexão Mongo restabelecida");
        }
      });

      mongoose.connection.on("error", (error: Error) => {
        if (envConfig.NODE_ENV === "development") {
          console.log("Erro de conexão do MongoDB. Certifique-se de que o MongoDB esteja em execução: ");
          console.log(`ERRO de conexão do Mongo: ${error}`);
        }
      });

      mongoose.connection.on("disconnected", () => {
        if (envConfig.NODE_ENV === "development") {
          console.log("A conexão do banco de dados MongoDB está desconectada...");
          console.log("Tentando se reconectar ao Mongo...");
        }

        setTimeout(() => {
          mongoose.connect(MONGO_URI, {
            keepAlive: true,
            socketTimeoutMS: 3000,
            connectTimeoutMS: 3000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          } as ConnectOptions);
        }, 3000);
      });

      // close the connection safely
      process.on("SIGINT", async () => {
        try {
          if (mongoose.connection.readyState === 1) { // if the connection is open close it
            await mongoose.connection.close();
            if (envConfig.NODE_ENV === "development") {
              console.log("A conexão do banco de dados MongoDB foi desconectada devido ao encerramento do app...");
            }
          }
          process.exit(0);
        } catch (error) {
          console.error("Erro ao fechar a conexão com o MongoDB: ", error);
          process.exit(1);
        }
      });

    } catch (error) {
      console.error("Erro ao conectar ao MongoDB: ", error);
      process.exit(1);
    }
  }
};

// function to disconnect the database
export const disconnectDB = async () => {
  await mongoose.disconnect();
  if (mongoServer) {
    await mongoServer.stop();
  }
};

export default connectDB;
