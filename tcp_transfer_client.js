const net = require('net');

function tcp_transfer(host, port, msg)
{
    var socket = new net.Socket();
    socket.setEncoding('utf-8');

    socket.connect
    (
        port,
        host,
        function()
        {
            socket.write
            (
                msg,
                'utf-8',
                function()
                {
                    console.log('send msg ok: ' + msg);
                }
            );
        }
    );

    socket.on
    (
        'data',
        function(data)
        {
            console.log('recv msg ok: ' + data);
        }
    );

    socket.on
    (
        'error',
        function(error)
        {
            console.log('error: ' + error);
            socket.destroy();
        }
    );

    socket.on
    (
        'close',
        function()
        {
            console.log('Connection closed');
        }
    );
}

