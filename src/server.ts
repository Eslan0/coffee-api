import app from "./app";
import connectDB from "./configs/database";
import envConfig from "./configs/variable";

const PORT = envConfig.API_URL || 3000;

const startServer = async () => {
  try {
    await connectDB(); // connect to database
    console.log("Database connected successfully.");

    app.listen(PORT, () => {
      // start the server
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
