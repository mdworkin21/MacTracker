const app = require("./server");
const PORT = process.env.PORT || 3000;
const {db} = require('./server/db')
// const User = require('./server/db/UserModel')
// const Profile = require('./server/db/ProfileModel')


db.sync()
  .then(() => {
    console.log('db synced.')
    app.listen(PORT, () => {
      console.log("LISTEN'N On PORT ", PORT);
    })
  });

