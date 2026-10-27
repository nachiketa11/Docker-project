const request = require('supertest');
const app = require('./app');

describe('HTTP endpoints', () => {
  test('root endpoint returns the project welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Docker Project Deployed Successfully!');
  });

  test('health endpoint returns JSON status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
