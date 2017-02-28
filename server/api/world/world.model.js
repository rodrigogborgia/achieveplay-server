'use strict';
import mongoose, {Schema} from 'mongoose';

var WorldSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    slug: {type: String, required: true, unique: true, trim: true, lowercase: true },
    info: {type: String, trim: true},
    director: {type: Schema.Types.ObjectId, required: true, unique: true, ref: 'User'}
}, {timestamps: {createdAt: 'created', updatedAt:'updated'}});

export default mongoose.model('World', WorldSchema);