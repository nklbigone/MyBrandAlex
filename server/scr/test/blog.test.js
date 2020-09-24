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
  describe(" GET /blog/", () => {
    it("It should GET all the blog", (done) => {
      chai
        .request(server)
        .get("/blogs/")
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("array");
          done();
        });
    });

    it("It should not GET all the queries", (done) => {
      chai
        .request(server)
        .get("/blog/")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });  
  });

      describe(" GET /blog/", () => {
        it("It should GET  one blog", (done) => {
              chai
                .request(server)
                .get("/blogs/5f63c4bde8fdad35914e7f08")
                .set("authorization", `Bearer ${token}`)
                .end((err, response) => {
                  expect(response).to.have.status(200);
                  expect(response.body).to.be.a("object");
                  done();
                });
        });

        it("It should not GET any blog", (done) => {
          chai
            .request(server)
            .get("/blog/68696785995976")
            .end((err, response) => {
              expect(response).to.have.status(404);
              done();
            });
        });
      });

      describe(" POST /blog/", () => {
        it("It should POST  one blog", (done) => {
            const blog = {
                title: 'work night',
                blogDescription: 'mine work',
                blogPicture: 'newjhgfhg'
            }
          chai
            .request(server)
            .post("/blogs/")
            .send(blog)
            .set("authorization", `Bearer ${token}`)
            .end((err, response) => {
              expect(response).to.have.status(200);
              expect(response.body).to.be.a("object");
              done();
            });
        });

        it("It should not POST any blog", (done) => {
          chai
            .request(server)
            .post("/blogs/25435")
            .end((err, response) => {
              expect(response).to.have.status(404);
              done();
            });
        });
      });

    describe(" PUT /blog/", () => {
      it("It should PUT  one blog", (done) => {
        const blog = {
          title: "work night changed",
        };
        chai
          .request(server)
          .put("/blogs/5f63c4bde8fdad35914e7f08")
          .send(blog)
          .set("authorization", `Bearer ${token}`)
          .end((err, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.be.a("object");
            done();
          });
      });

      it("It should not put any blog", (done) => {
        chai
          .request(server)
          .put("/blogs/25435")
          .end((err, response) => {
            expect(response).to.have.status(404);
            done();
          });
      });
    });

    describe(" PATCH /blog/", () => {
      it("It should PATCH  one blog", (done) => {
        const blog = {
          title: "work night changed",
        };
        chai
          .request(server)
          .patch("/blogs/5f63c4bde8fdad35914e7f08")
          .send(blog)
          .set("authorization", `Bearer ${token}`)
          .end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            done();
          });
      });

           it("It should not PATCH  one blog", (done) => {
            const blog = {
              title: "work night changed",
            };
            chai
              .request(server)
              .patch("/bloh/5f63c4bde8fdad35914e7f08")
              .send(blog)
              .set("authorization", `Bearer ${token}`)
              .end((err, response) => {
                expect(response).to.have.status(404);
                expect(response.body).to.be.a("object");
                done();
              });
            });

    });

       describe(" DELTE /blog/", () => {
      it("It should DELETE  one blog", (done) => {
        chai
          .request(server)
          .delete("/blogs/5f63c4bde8fdad35914e7f08")
          .set("authorization", `Bearer ${token}`)
          .end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            done();
          });
      });
    });

});
