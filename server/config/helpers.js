const Mysqli = require('mysql');


let db = Mysqli.createConnection({
    Host: 'localhost', // IP/domain name 
    post: 3306, // port, default 3306 
    user: 'mega_user', // username 
    password : '123456',// password 
    db: 'mega_shop'
});

// Connect
db.connect((err) => {
    if(err){
      console.log(err);
    }
    console.log('MySql Connected');
  });

module.exports = {
    database: db,
    }