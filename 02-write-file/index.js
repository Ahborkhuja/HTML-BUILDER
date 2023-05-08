const { Readable,Writable } = require('stream');

async function * generate() {
  yield 'hello';
  yield 'streams';
}

const readable = Readable.from(generate());

const writeable = Writable;

writeable.on('error', ()=>{
  console.log("axbor");
})

readable.on('data', (chunk) => {
  console.log(chunk);
});
