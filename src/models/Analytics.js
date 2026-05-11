import mongoose from "mongoose";

const GlobalStatsSchema = new mongoose.Schema({
  id: { type: String, default: "global_stats", unique: true },
  visitors: { type: Number, default: 0 },
  searches: { type: Number, default: 0 },
});

export const GlobalStats = mongoose.models.GlobalStats || mongoose.model("GlobalStats", GlobalStatsSchema);
