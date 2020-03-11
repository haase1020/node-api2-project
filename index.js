
const PORT = 5000;

const server = require('./api/server.js');

server.listen(PORT, () => {
    console.log(`\n** Server Running on http://localhost:${PORT}`)
})

//complete