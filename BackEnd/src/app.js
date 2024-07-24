const express = require('express');
const cors= require('cors');
const app = express();
app.use(cors());
const employeeroute = require('./routes/employeeroutes');

app.use('/employees',employeeroute);

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));