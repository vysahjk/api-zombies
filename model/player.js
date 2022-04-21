import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Player = Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true }
})

export default mongoose.model('Player', Player)
