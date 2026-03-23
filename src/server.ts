import app from "./app";
import connectDB from "./configs/database";
import envConfig from "./configs/variable";

// start the server
const PORT = envConfig.API_URL;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
