const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.arg)).argv;


const mongoose = require("mongoose");
mongoose.connect (
    'mongodb://localhost:27017/my-friends',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);