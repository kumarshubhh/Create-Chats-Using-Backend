
const mongoose = require('mongoose');
const Chat = require('./models/chat');

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
        console.log("Connected to MongoDB: whatsapp database");

        let allChats = [
            { from: "neha", to: "preeti", msg: "send me notes for the exams", created_at: new Date() },
            { from: "amit", to: "sumit", msg: "All the best", created_at: new Date() },
            { from: "Tony", to: "Peter", msg: "Bring me some fruits", created_at: new Date() },
            { from: "rohit", to: "mohit", msg: "Teach me JS callbacks", created_at: new Date() },
        ];

        await Chat.insertMany(allChats);
        console.log("Chats inserted successfully");
    } catch (err) {
        console.error("Error:", err);
    } finally {
        mongoose.connection.close();
    }
}

main();