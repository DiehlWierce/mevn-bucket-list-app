const express = require("express") //NodeJS framework for API
const app = express() //create Express App
const mongoose = require("mongoose") // for MongoDB
const {PORT, mongoUri} = require("./config") //add some main vars
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const bucketListItemRoutes = require("./routes/api/BucketListItems")

app.use(cors()) //for ajax requests
app.use(morgan('tiny')) //for security
app.use(bodyParser.json())


//connect to db
mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("MongoDB database is connected...")) //if connect is success
    .catch((err) => console.log(err)) //if we got error

app.use('api/bucketListItems', bucketListItemRoutes)
// * api get reqs
app.get('/', (res,req) => {
    console.log("Hello, World!")
})

// server console
app.listen(PORT, () => {
    console.log(`App listening at https://localhost:${PORT}`)
})