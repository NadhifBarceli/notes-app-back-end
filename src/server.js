const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    // Untuk mengatasi Same-Origin policy dengan menerapkan CORS (Cross Origin Resource Sharing)
    // Kalau masih gabisa somehow after modul menampilkan, kalo lu di chrome, buka chrome://flags
    // Terus coba search flags yang "Block insecure private network requests." ubah jadi 'disabled'
    // Abis project ini balikin aja untuk security
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
