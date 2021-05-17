import mongoose from "mongoose";

const Schema = mongoose.Schema;

const crud1 = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {versionKey: false}
);

export default mongoose.model(`crud1`,crud1,`crud1`);