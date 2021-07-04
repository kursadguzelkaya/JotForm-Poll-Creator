const io = require('socket.io')(4000, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

io.on('connection', socket => {
  console.log(`user connected ${socket.id}`);
  socket.on('submit-poll', selected => {
    console.log(selected);
    socket.broadcast.emit('update-result', selected);
  });
});
