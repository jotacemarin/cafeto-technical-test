'use strict';

const server = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET parks', () => {
    it('expect response status to be ok', (done) => {
        chai.request(server)
            .get('/api/parks?page=1&limit=100')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                done();
            });
    });

    it('expect response with content', (done) => {
        let text = 'test';
        chai.request(server)
            .get('/api/parks?page=1&limit=100')
            .end((err, res) => {
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.be.greaterThan(0);
                done();
            });
    });
});
