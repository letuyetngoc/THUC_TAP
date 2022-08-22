import io from 'socket.io-client'
import { DOMAIN } from '../setting/setting';

var socket = io(DOMAIN, {
    transports: ['websocket', 'polling', 'flashsocket']
});

export default socket;