'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var worldCtrlStub = {
  index: 'worldCtrl.index',
  show: 'worldCtrl.show',
  create: 'worldCtrl.create',
  upsert: 'worldCtrl.upsert',
  patch: 'worldCtrl.patch',
  destroy: 'worldCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var thingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './world.controller': worldCtrlStub
});

describe('Thing API Router:', function() {
  it('should return an express router instance', function() {
    thingIndex.should.equal(routerStub);
  });

  describe('GET /api/things', function() {
    it('should route to world.controller.index', function() {
      routerStub.get
        .withArgs('/', 'worldCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/things/:id', function() {
    it('should route to world.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'worldCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/things', function() {
    it('should route to world.controller.create', function() {
      routerStub.post
        .withArgs('/', 'worldCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/things/:id', function() {
    it('should route to world.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'worldCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/things/:id', function() {
    it('should route to world.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'worldCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/things/:id', function() {
    it('should route to world.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'worldCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
