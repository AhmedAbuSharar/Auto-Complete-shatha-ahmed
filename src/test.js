const supertest = require("supertest");
const router = require("./router");

describe("router test", () => {
  test('when endpoint equal "/"', (done) => {
    supertest(router)
      .get("/")
      .expect(200)
      .expect("Content-Type", /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('when endpoint equal "/images/home-image.jpg"', (done) => {
    supertest(router)
      .get("/images/home-image.jpg")
      .expect(200)
      .expect("Content-Type", /jpg/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  test('when endpoint includes "/movies"', (done) => {
    supertest(router)
      .get("/movies")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  test("When endpoint has a value other than these values", (done) => {
    supertest(router)
      .get("/someValue")
      .expect(404)
      .expect("Content-Type", /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(404);
        expect(res.text).toBe("<h1> Page Not Found</h1>");
        done();
      });
  });
});
