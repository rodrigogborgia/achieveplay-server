'use strict';

var app = require('../..');
import request from 'supertest';
import User from '../user/user.model';

var newWorld;

describe('World API:', function() {

  var user;

  // Clear users before testing
  before(function() {
    return User.remove().then(function() {
      user = new User({
        name: 'Fake User',
        email: 'test@example.com',
        password: 'password'
      });

      return user.save();
    });
  });

  // Clear users after testing
  after(function() {
    return User.remove();
  });

  describe('GET /api/worlds', function() {
    var worlds;

    beforeEach(function(done) {
      request(app)
        .get('/api/worlds')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          worlds = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      worlds.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/worlds', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/worlds')
        .send({
          name: 'New World',
          slug: 'new-world',
          info: 'This is the brand new world!!!',
          director: user._id
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newWorld = res.body;
          done();
        });
    });

    it('should respond with the newly created world', function() {
      newWorld.name.should.equal('New World');
      newWorld.info.should.equal('This is the brand new world!!!');
    });
  });

  describe('GET /api/worlds/:id', function() {
    var world;

    beforeEach(function(done) {
      request(app)
        .get(`/api/worlds/${newWorld._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          world = res.body;
          done();
        });
    });

    afterEach(function() {
      world = {};
    });

    it('should respond with the requested world', function() {
      world.name.should.equal('New World');
      world.info.should.equal('This is the brand new world!!!');
    });
  });

  describe('PUT /api/worlds/:id', function() {
    var updatedWorld;

    beforeEach(function(done) {
      request(app)
        .put(`/api/worlds/${newWorld._id}`)
        .send({
          name: 'Updated World',
          info: 'This is the updated world!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedWorld = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedWorld = {};
    });

    it('should respond with the updated world', function() {
      updatedWorld.name.should.equal('Updated World');
      updatedWorld.info.should.equal('This is the updated world!!!');
    });

    it('should respond with the updated world on a subsequent GET', function(done) {
      request(app)
        .get(`/api/worlds/${newWorld._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let world = res.body;

          world.name.should.equal('Updated World');
          world.info.should.equal('This is the updated world!!!');

          done();
        });
    });
  });

  describe('PATCH /api/worlds/:id', function() {
    var patchedWorld;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/worlds/${newWorld._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched World' },
          { op: 'replace', path: '/info', value: 'This is the patched world!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedWorld = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedWorld = {};
    });

    it('should respond with the patched world', function() {
      patchedWorld.name.should.equal('Patched World');
      patchedWorld.info.should.equal('This is the patched world!!!');
    });
  });

  describe('DELETE /api/worlds/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/worlds/${newWorld._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when world does not exist', function(done) {
      request(app)
        .delete(`/api/worlds/${newWorld._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
