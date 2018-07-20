const app = require("./server");
const PORT = process.env.PORT || 3000;
const db = require('./server/db/database')


db.sync()
  .then(() => {
    console.log('db synced.')
    app.listen(PORT, () => {
      console.log("LISTEN'N On PORT ", PORT);
    })
  });

