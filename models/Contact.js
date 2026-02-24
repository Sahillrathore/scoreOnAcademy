import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // adds createdAt & updatedAt
);

export default mongoose.models.Contact ||
    mongoose.model("Contact", ContactSchema);