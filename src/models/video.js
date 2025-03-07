import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const videoSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: Number },
    views: { type: String },
    autor: autorSchema,
  },
  { versionKey: false }
);

const video = mongoose.model("videos", videoSchema);

export default video;
