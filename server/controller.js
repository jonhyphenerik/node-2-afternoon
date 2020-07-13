// message data
let messages = [];

let id = 0; 

module.exports = {
    getMessages: (req, res) => {res.status(200).send(messages)},
    sendMessage: (req, res) => {
        let message = {
            id: id,
            text: req.body.text,
            time: req.body.time
        }
        messages.push(message);
        id++;
        res.status(200).send(messages)
    },
    editMessage: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        console.log(`index: ${index}, message: ${messages}, id: ${req.params.id}`);
        messages[index].text = req.body.text;

        res.status(200).send(messages);
    },
    deleteMessage: (req, res) => {
        let index = messages.findIndex(e => e.id === +req.params.id);
        messages.splice(index, 1)
        res.status(200).send(messages)
    }
}
