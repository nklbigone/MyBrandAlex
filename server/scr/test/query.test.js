

import chai from 'chai'
import chaihttp from 'chai-http'
import server from '../../server'
import { describe, it, beforeEach } from 'mocha'
import jwt from 'jsonwebtoken'

//

chai.should();

chai.use(chaihttp);

describe(" Query API", () => {
  // Test get routes
 const token = jwt.sign( {name: "welcome", id: "fast", mail: "now"},process.env.JWT_SECRET)
  describe(" GET /queries/", () => {
    it("It should GET all the queries", (done) => {
      chai
        .request(server)
        .get("/queries/")
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          console.log(response.body);
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(9);
          done();
        });
    });

        it("It should not GET all the queries", (done) => {
          chai
            .request(server)
            .get("/querie/")
            .end((err, response) => {
              response.should.have.status(404);
              done();
            });
        });
  });
});