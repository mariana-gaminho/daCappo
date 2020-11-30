const { model, Schema } = require('mongoose');

const musicSheetSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    composer: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: true
    },
    editorial: {
      type: String,
      required: true
    },
    instruments: {
      type: String,
      enum: ['piano', 'violin', 'guitar', 'cello', 'flute', 'viola', 'trombone']
    },
  },{
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('MusicSheet', musicSheetSchema);