import chai from "chai";
import chaihttp from "chai-http";
import server from "../../server";
import { describe, it, beforeEach } from "mocha";
import jwt from "jsonwebtoken";

//

const expect = chai.expect;

chai.use(chaihttp);

describe(" blog API", () => {
  // Test get routes
  const token = jwt.sign(
    { name: "welcome", id: "fast", mail: "now" },
    process.env.JWT_SECRET
  );

  describe(" POST /user/", () => {
    it("It should POST  one user", (done) => {
      const blog = {
        name: "nikitta",
        email: "ikit@gmail.com",
        password: "123456",
      };
      chai
        .request(server)
        .post("/users/register/")
        .send(blog)
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          expect(response).to.have.status(201);
          expect(response.body).to.be.a("object");
          done();
        });
    });

    it("It should not POST any user", (done) => {
      chai
        .request(server)
        .post("/users/25435")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });
});
