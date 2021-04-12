import server from '../../src/server';

const request = require('supertest');

afterEach((done) => {
  server.close();
  done();
})

describe("routes/healthRoute", () => {
  it("Should return success with upTime & timeStamp", async () => {
    const response = await request(server).get('/health')
    console.log(response.data)
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.success).toEqual(true); 
    expect(response.body.works).toEqual('great'); 
  })
})