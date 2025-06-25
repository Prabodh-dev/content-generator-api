import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

import titleRoutes from "./routes/titleRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";

app.use("/api/title", titleRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/summary", summaryRoutes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
