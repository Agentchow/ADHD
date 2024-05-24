import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
    name: string;
    description: string;
}

const CategorySchema: Schema<ICategory> = new Schema({
    name: { type: String, required: true },
    description: { type: String },
});

export default mongoose.model<ICategory>('Category', CategorySchema);