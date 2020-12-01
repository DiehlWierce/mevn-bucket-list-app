const { Schema, model } = require("mongoose")


//Schema for model's posts
const BucketListItemSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    date: {
        date: Date,
        default: Date.now,
    }
})

//one example
const BucketListItem = model('bucketListItem', BucketListItemSchema)

module.exports = BucketListItem