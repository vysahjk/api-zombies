import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Partie = Schema({
  username: { type: String, required: true },
  vie: { type : Number}, 
  zombies_morts: { type : Number },
  time: { type: Number },
})

export default mongoose.model('Partie', Partie)
