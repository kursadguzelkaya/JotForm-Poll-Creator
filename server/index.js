const io = require('socket.io')(4000, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:8000'],
  },
});

io.on('connection', socket => {
  console.log(`user connected ${socket.id}`);
  socket.on('submit-poll', data => {
    console.log(data);
    socket.broadcast.emit('update-result', data);
  });
});
