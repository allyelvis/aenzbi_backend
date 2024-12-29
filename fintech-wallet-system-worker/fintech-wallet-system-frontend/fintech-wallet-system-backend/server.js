const fastify = require('fastify')();

fastify.get('/api/v1/wallet/balance', async (request, reply) => {
    return { balance: 1000 }; // Dummy balance
});

fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log();
});
