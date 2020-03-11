const server = require('./api/server.js');
const cors = require('cors');

server.use(cors())

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`\n** Server Running on http://localhost:${PORT}`)
})

//complete