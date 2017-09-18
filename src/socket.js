import io from 'socket.io-client'

export default io.connect(process.env.SOCKET_HOST)
