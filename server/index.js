const io = require('socket.io')(4000, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:8000'],
  },
});

io.on('connection', socket => {
  socket.on('submit-poll', data => {
    socket.broadcast.emit('update-result', data);
  });
});
