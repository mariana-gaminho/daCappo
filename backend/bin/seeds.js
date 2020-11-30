const mongoose = require('mongoose');
const MusicSheet = require('../models/MusicSheet');
const User = require('../models/User');

const musicSheets = [
  {
    name: 'Fantasy in F Minor',
    composer: 'Franz Schubert',
    file: 'https://res.cloudinary.com/dqn076p7z/image/upload/v1606770760/DaCappo/Fantasy_in_F_Minor_kkeygy.pdf',
    editorial: 'Dover Publications, Inc.',
    instruments: 'piano',
  }
];

// {
//   "name": "Fantasy in F Minor",
//   "composer": "Franz Schubert",
//   "file": "https://res.cloudinary.com/dqn076p7z/image/upload/v1606770760/DaCappo/Fantasy_in_F_Minor_kkeygy.pdf",
//   "editorial": "Dover Publications, Inc.",
//   "instruments": "piano"
// }

const users = [
  {
    username: 'mariana-gaminho',
    email: 'mariana@gmail',
  }
];

mongoose.connect(process.env.DB, {useNewUrlParser: true});

const createMusicSheets = MusicSheet.create(musicSheets);
const createUsers = User.create(users);

Promise.all([createMusicSheets, createUsers])
.then(results => {
  console.log('Data created: ', results)
  mongoose.connection.close()
})
.catch(err => {
  console.log(err)
  mongoose.connection.close()
});
