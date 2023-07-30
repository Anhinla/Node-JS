// const {readFileSync,writeFileSync} = require('fs')
// const first = readFileSync('C:/Users/DELL/Documents/Programming/Nodejs/fs module/subfolder/content.txt','utf8');
// console.log(first);

// writeFileSync('C:/Users/DELL/Documents/Programming/Nodejs/fs module/subfolder/content2.txt','this is my first file');

// // append to file
// writeFileSync('C:/Users/DELL/Documents/Programming/Nodejs/fs module/subfolder/content2.txt','this is my first file',{flag:'a'});

// Asynchronous

const {readFile,writeFile} = require('fs')

readFile('C:/Users/DELL/Documents/Programming/Nodejs/fs module/subfolder/content.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})

