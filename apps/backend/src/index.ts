import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./modules/jobs/job.routes";
import applicationRoutes from "./modules/application/appliation.routes";
import categoryRoutes from "./modules/category/category.routes";
import uploadRoutes from "./modules/upload/upload.routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3001;

// CORS must be configured BEFORE routes
app.use(cors({
  origin: [
    "http://localhost:3000",
    process.env.FRONTEND_URL || "http://localhost:3000"
  ],
  credentials: true
}));

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", jobRoutes);
app.use("/api", applicationRoutes);
app.use("/api", categoryRoutes);
app.use("/api/upload", uploadRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
