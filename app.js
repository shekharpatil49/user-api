const express = require('express');
const app = express();
const PORT = 4000;
const connectDB = require('./config/db');

app.use(express.json());

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173'
}));


app.get('/',(req,res) =>{
    res.send('Hello World!!!')
});

const startServer = async () => {
  await connectDB(); // ensure DB is connected first

  app.listen(PORT, () => {
    console.log("🚀 Server running on port 4000");
  });
};
startServer();

const userRoutes = require('./routes/user');
app.use(userRoutes);

