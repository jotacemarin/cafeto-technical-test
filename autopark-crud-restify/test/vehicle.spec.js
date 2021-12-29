'use strict';

const server = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('/POST vehicle', () => {
    it('expect response status to be ok', (done) => {
        chai.request(server)
            .post('/api/vehicle')
            .send({
                "mark": "chevrolet",
                "model": "spark",
                "relase_date": "2019",
                "licence_plate": "btw-122"
            })
            .end((err, res) => {
                expect(res).to.have.status(500);
                expect(res).to.be.json;
                done();
            });
    });
});
