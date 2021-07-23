const PORT = process.env.PORT || 4000;

const io = require('socket.io')(PORT, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:8000', 'https://jotform-polls.herokuapp.com'],
  },
});

io.on('connection', socket => {
  socket.on('submit-poll', data => {
    socket.broadcast.emit('update-result', data);
  });
});
