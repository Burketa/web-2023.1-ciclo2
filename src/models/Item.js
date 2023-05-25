const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  attack: {
    type: String,
    required: false
  },
  defense: {
    type: String,
    required: false
  }
})

ItemSchema.plugin(mongoosePaginate)

mongoose.model("Item", ItemSchema)