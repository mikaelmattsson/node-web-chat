import connection from './Connection'

export default class Receiver {

    static onMessage(func) {
        connection.io.on('chat:message', func);
    }

    static removeMessageListener(func) {
        connection.io.removeEventListener('chat:message', func);
    }

    static onJoinedRoom(func) {
        connection.io.on('chat:joinedRoom', func);
    }

    static removeJoinedRoomListener(func) {
        connection.io.removeEventListener('chat:joinedRoom', func);
    }

}
