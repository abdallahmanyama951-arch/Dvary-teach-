const { Telegraf } = require('telegraf');
const pino = require('pino');
const { default: makeWASocket, useMultiFileAuthState, delay, makeCacheableSignalKeyStore } = require("@whiskeysockets/baileys");

const bot = new Telegraf("8665803785:AAEB0ZUnFH4AiWyd7PtKiwyoGA50-ml0R84");

bot.start((ctx) => {
    ctx.reply("Habari! Karibu kwenye GhostPixel Bot.\n\nTafadhali tuma namba yako ya WhatsApp (anza na 255...) ili nikupe Pairing Code ya kuunganisha bot.");
});

bot.on('text', async (ctx) => {
    const text = ctx.message.text;
    if (text.startsWith('255') && text.length >= 12) {
        ctx.reply("Tafadhali subiri kidogo... Tunatengeneza Pairing Code yako ⏳");
        
        // Hapa ndipo Logic ya Baileys Pairing Code inakaa
        // Bot itawasiliana na WhatsApp na kumtumia mtumiaji Code yake hapa.
        
        ctx.reply("Hongera! Code yako ni: [ITAONEKANA HAPA]");
    } else {
        ctx.reply("Tafadhali weka namba sahihi kuanzia na 255 (mfano: 2557XXXXXXXX)");
    }
});

bot.launch();

