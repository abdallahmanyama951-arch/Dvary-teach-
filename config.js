const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

global.botname = "GhostPixel Bot";
global.ownername = "Dvary Manyama";
global.prefix = ".";
global.bottoken = "8665803785:AAEB0ZUnFH4AiWyd7PtKiwyoGA50-ml0R84"; // Token yako ipo hapa

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    BOT_TOKEN: process.env.BOT_TOKEN || global.bottoken,
    OWNER_NUMBER: process.env.OWNER_NUMBER || "255XXXXXXXXX", // Weka namba yako hapa
};

