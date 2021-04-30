import { Schema, model, Document } from 'mongoose';

interface Feedback extends Document {
  email: string;
  message: string;
  createdAt: string;
}

const FeedbackSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { collection: 'feedback' });

export default model<Feedback>('Feedback', FeedbackSchema, 'feedback');
