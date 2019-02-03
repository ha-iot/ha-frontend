import io from 'socket.io-client'

const socket = io.connect(process.env.REACT_APP_SOCKET_HOST)

export default {
  instance: socket,
  askForLampsState,
  onGeneralResponse,
  onLampsStateUpdate,
  triggerActionOnLamp,
}

/**
 *
 * @param {{target: String, action: String}} data
 */
function triggerActionOnLamp(data) {
  socket.emit('client/lampsAction', data)
}

function askForLampsState() {
  socket.emit('client/getLampsState')
}

function onGeneralResponse(handler) {
  socket.on('client/response', handler)
}

function onLampsStateUpdate(handler) {
  socket.on('client/lampsState', handler)
}
