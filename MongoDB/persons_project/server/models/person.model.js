import mongoose, { Schema } from 'mongoose';

const PersonSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Person = mongoose.model('Person', PersonSchema);

export default Person;
