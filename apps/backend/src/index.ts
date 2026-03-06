import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./modules/jobs/job.routes";
import applicationRoutes from "./modules/application/appliation.routes";
import categoryRoutes from "./modules/category/category.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", jobRoutes);  
app.use("/api", applicationRoutes);
app.use("/api", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
