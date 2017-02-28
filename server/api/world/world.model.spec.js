'use strict';

import app from '../..';
import World from './world.model';
var world;
var genWorld = function() {
  world = new World({
    name: 'New World',
    slug: 'new-world',
    info: 'This is the brand new world!!!'
  });
  return world;
};

describe('World Model', function() {
  before(function() {
    // Clear worlds before testing
    return World.remove();
  });

  beforeEach(function() {
    genWorld();
  });

  afterEach(function() {
    return World.remove();
  });

  it('should begin with no worlds', function() {
    return World.find({}).exec().should
      .eventually.have.length(0);
  });

  it('should fail when saving a duplicate world', function() {
    return world.save()
      .then(function() {
        var wrldDup = genWorld();
        return wrldDup.save();
      }).should.be.rejected;
  });

  describe('#slug', function() {
    it('should fail when saving with a blank slug', function() {
      world.slug = '';
      return world.save().should.be.rejected;
    });

    it('should fail when saving with a null slug', function() {
      world.slug = null;
      return world.save().should.be.rejected;
    });

    it('should fail when saving without an slug', function() {
      world.slug = undefined;
      return world.save().should.be.rejected;
    });
  });

  describe('#name', function() {
    it('should fail when saving with a blank name', function() {
      world.name = '';
      return world.save().should.be.rejected;
    });

    it('should fail when saving with a null name', function() {
      world.name = null;
      return world.save().should.be.rejected;
    });

    it('should fail when saving without a name', function() {
      world.name = undefined;
      return world.save().should.be.rejected;
    });
  });
});
