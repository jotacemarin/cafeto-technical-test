'use strict';

const server = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET echo', () => {
    it('expect response status to be ok', (done) => {
        chai.request(server)
            .get('/api/echo/test')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it('expect response path param', (done) => {
        let text = 'test';
        chai.request(server)
            .get(`/api/echo/${text}`)
            .end((err, res) => {
                expect(res.body.echo).to.equal(text);
                done();
            });
    });
});
