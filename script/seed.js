// include model imports here, to seed DB

const db = require('../server/db/database')
const User = require('../server/db/User')
const Card = require('../server/db/Card')

async function seed() {
    await db.sync({force: true})
    //use this area to seed your database
    await Card.create({
      name: 'Arjuna Alter',
      img: 'https://static.wikia.nocookie.net/fategrandorder/images/1/19/S247_Stage1.webp/revision/latest?cb=20220917062140',
      class: 'Berserker'
    })

    await Card.create({
      name: 'Merlin',
      img: 'https://static.wikia.nocookie.net/fategrandorder/images/7/7f/S150_Stage2.webp/revision/latest?cb=20220911081225',
      class: 'Caster'
    })
    
    console.log("🌱🌱  Seeding Successful  🌱🌱");
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
    console.log("seeding...");
    try {
      await seed();
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    } finally {
      console.log("closing db connection");
      await db.close();
      console.log("db connection closed");
    }
  }

  /*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
    runSeed();
  }
  
  // we export the seed function for testing purposes (see `./seed.spec.js`)
  module.exports = seed;