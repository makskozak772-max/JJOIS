// MessageService.js

class MessageService {
    constructor() {
        this.messages = [];
    }

    encryptMessage(message) {
        // Implement simple encryption logic here (e.g. base64 encoding)
        return Buffer.from(message).toString('base64');
    }

    decryptMessage(encryptedMessage) {
        // Implement decryption logic here
        return Buffer.from(encryptedMessage, 'base64').toString('utf8');
    }

    addMessage(message) {
        const encryptedMessage = this.encryptMessage(message);
        this.messages.push(encryptedMessage);
    }

    getMessages() {
        return this.messages.map(this.decryptMessage.bind(this));
    }
}

module.exports = new MessageService();
