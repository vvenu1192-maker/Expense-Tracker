const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const passport = require("passport");
const connectDb = require("./config/connectDb");
const userRoutes = require("./routes/userRoute");
const transactionRoutes = require("./routes/transectionRoutes");
const adminRoutes = require("./routes/adminRoutes");
const googleAuthRoutes = require("./routes/googleAuthRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(passport.initialize());

app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/auth", googleAuthRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`.bgGreen.white);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
    process.exit(1);
  }
};

startServer();
