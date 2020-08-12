const amqp = require('amqplib/callback_api')
var args = process.argv.slice(2)

if ( args.length == 0
     ||typeof args.length === 'string' 
     || args.length instanceof String ){
         console.log('[-] Amount of messages is required')
         process.exit(0)
}

amqp.connect('amqp://localhost:5672', function (err, conn){
    conn.createChannel(
        function(err, ch){
        num = 0
        while ( num < args ){
            var q = 'task-queue'
            var msg = 'msg-to-queue ' + num
            ch.assertQueue(q, { durable: false })
            ch.sendToQueue(q, new Buffer.from (msg))
            console.log(' [x] Sent %s',msg)
            num++
        }
    })
    setTimeout(
        function(){
        conn.close()
        process.exit(0)
    },500)
})