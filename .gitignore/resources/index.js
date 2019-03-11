const io = require('socket.io')(3000); // tạo kết nối realtime

io.on('connection', socket =>{
    console.log(`Đã tạo ra kết nối : ${socket.id}`);

    socket.on('dungstream',stream => {
        console.log(stream);
        socket.broadcast.emit('truyenlai', stream);
    });
});
// io.on('Dangky', e => {
//     io.emit('Phanhoi', )
// });


