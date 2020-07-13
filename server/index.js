const express = require('express');
const ctrl = require('./controller')

const app = express();

app.use(express.json());

app.get('/api/messages', ctrl.getMessages);
app.post('/api/messages', ctrl.sendMessage);
app.put('/api/messages/:id', ctrl.editMessage);
app.delete('/api/messages/:id', ctrl.deleteMessage);

app.listen(3001, ()=> console.log('Server Running on Port #3001'));