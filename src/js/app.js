import Chat from './chat';

const server = 'http://localhost:7070/';
const login = new Chat(server);

login.init();
