const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')

const userRoute = require('./routes/userRouter')

app.use(express.json())
app.use(cors())



app.use('/api/user', userRoute);




app.listen(4000, () => console.log('Listenning on '))


