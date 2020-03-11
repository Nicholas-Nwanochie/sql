//promise library
const promise = require('bluebird');
let initOptions = {
    promiseLib: promise
}
//testdbJan20
let config = {
    host: 'localhost',
    port: 5432,
    database: 'jan2020_db',
    user: 'postgres',
    password:'nick'
}
//load and init pg-promise
let pgp = require('pg-promise')(initOptions);
let db = pgp(config);
console.log(db);
// db.query("SELECT * FROM dishes WHERE title='soup'")
//     .then((results) => {
//         console.log(results);
//     })
db.one("INSERT INTO pgpromise VALUES (DEFAULT, 'Alina', 'Moscow' ) RETURNING ID")
    .then((result) => {
      
        console.log(result);
        db.query(`SELECT * FROM pgpromise where id=${result.id}`)
        .then((results) => {
          console.log(`return from query`)
        })
    })
    // db.query("SELECT* FROM pgpromise ")
    // .then((results)=>{
    //     results.forEach((person)=>{
    //         console.log(`Good morning ${person.name}`)
    //     })
    // })





