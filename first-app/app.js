//Load a module
// const logger = require('./logger');

// logger('anh');

//

// const path = require('path');

// var pathobj = path.parse(__filename);
// console.log(pathobj);
// //OS module
// const os = require('os');
// const totalMem = os.totalmem();
// const freeMem = os.freemem();

// console.log(`Total memory: ${totalMem}`);
// console.log(`Free memory: ${freeMem}`);
// // File module
// const fs = require('fs');

// const files = fs.readdir('./',function(err,res){
//     if(err) console.log('Error',err);
//     else console.log('Result: '+res);
// });
// console.log(files);

// Event module

const EventEmitter = require('events'); // class

const Logger = require('./logger');
const logger = new Logger();
// Register a listener
logger.on('messageLogged',function(e){
    console.log('listener called',e);
});


logger.log('message');




