import { createWorker } from '@cloudflare/worker-fastify';
const app = createWorker();

app.get('/api/v1/wallet/balance', async (request, reply) => {
    // Logic for retrieving wallet balance from Cloudflare KV
    const userId = request.query.userId;
    const balance = await WALLET_KV.get(userId); // Cloudflare KV storage
    reply.send({ balance });
});

app.post('/api/v1/wallet/transfer', async (request, reply) => {
    // Logic for processing fund transfer
    const { fromUser, toUser, amount } = request.body;
    const fromBalance = await WALLET_KV.get(fromUser);
    const toBalance = await WALLET_KV.get(toUser);

    if (fromBalance < amount) {
        reply.status(400).send({ error: 'Insufficient funds' });
    } else {
        await WALLET_KV.put(fromUser, fromBalance - amount);
        await WALLET_KV.put(toUser, toBalance + amount);
        reply.send({ message: 'Transfer successful' });
    }
});

export default app;
