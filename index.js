//import json-server  

const jsonSever = require("json-server")

//create server
const empServer = jsonSever.create()

//setup path for db.json file
const  router = jsonSever.router("db.json")

// create middleware
const middleware = jsonSever.defaults()

//define a port for runing json server
const PORT = 3000 || process.env.PORT

//use middleware,router
empServer.use(middleware)
empServer.use(router)

//runderver in given port to resolve client request
empServer.listen(PORT,()=>{
    console.log(`MP server is started at port ${PORT}and waiting for cilent request`);
    
})