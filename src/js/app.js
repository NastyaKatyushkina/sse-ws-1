import Chat from './chat';

const server = 'wss://my-first-project-d6ux.onrender.com';
const login = new Chat(server);

login.init();
