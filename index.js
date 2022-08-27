const express = require ('express')

const server = express()

server.use(express.static(__dirname+'/pubilc'))

server.listen(3000, () => {
    console.log('servidor corriendo')
})