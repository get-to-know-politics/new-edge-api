"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing contact endpoints', function () {
  it('It should create a contact', function (done) {
    var contact = {
      firstname: 'Hannah',
      lastname: 'Werman',
      zip: 60175,
      email: 'hannah.werman@gmail.com'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/contacts').set('Accept', 'application/json').send(contact).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        firstname: contact.firstname,
        lastname: contact.lastname,
        zip: contact.zip,
        email: contact.email
      });
      done();
    });
  });
  it('It should not create a contact with incomplete parameters', function (done) {
    var contact = {
      firstname: "Hannah",
      zip: 60175
    };

    _chai["default"].request(_index["default"]).post('/api/v1/contacts').set('Accept', 'application/json').send(contact).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all contacts', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/contacts').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('firstname');
      res.body.data[0].should.have.property('lastname');
      res.body.data[0].should.have.property('zip');
      res.body.data[0].should.have.property('email');
      done();
    });
  });
  it('It should get a particular contact', function (done) {
    var contactId = 1;

    _chai["default"].request(_index["default"]).get("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('firstname');
      res.body.data.should.have.property('lastname');
      res.body.data.should.have.property('zip');
      res.body.data.should.have.property('email');
      done();
    });
  });
  it('It should not get a contact with an invalid id', function (done) {
    var contactId = 8888;

    _chai["default"].request(_index["default"]).get("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find contact with the id ".concat(contactId));
      done();
    });
  });
  it('It should not get a book with a non-numeric id', function (done) {
    var contactId = 'aaa';

    _chai["default"].request(_index["default"]).get("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should update a contact', function (done) {
    var contactId = 1;
    var updatedContact = {
      id: contactId,
      firstname: "Not Hannah",
      lastname: "Werman",
      zip: 60175,
      email: 'email@email.com'
    };

    _chai["default"].request(_index["default"]).put("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').send(updatedContact).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updatedContact.id);
      expect(res.body.data.firstname).equal(updatedContact.firstname);
      expect(res.body.data.lastname).equal(updatedContact.lastname);
      expect(res.body.data.zip).equal(updatedContact.zip);
      expect(res.body.data.email).equal(updatedContact.email);
      done();
    });
  });
  it('It should not update a contact with invalid id', function (done) {
    var contactId = 9999;
    var updatedContact = {
      id: contactId,
      firstname: "Not Hannah",
      lastname: "Werman",
      zip: 60175,
      email: 'email@email.com'
    };

    _chai["default"].request(_index["default"]).put("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').send(updatedContact).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find contact with the id ".concat(contactId));
      done();
    });
  });
  it('It should not update a contact with a non-numeric id value', function (done) {
    var contactId = 'aaa';
    var updatedContact = {
      id: contactId,
      firstname: "Not Hannah",
      lastname: "Werman",
      zip: 60175,
      email: 'email@email.com'
    };

    _chai["default"].request(_index["default"]).put("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').send(updatedContact).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql("Please input a valid numeric value");
      done();
    });
  });
  it('It should delete a contact', function (done) {
    var contactId = 1;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a contact with invalid id', function (done) {
    var contactId = 9999;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Contact with the id ".concat(contactId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a contact with non-numeric id', function (done) {
    var contactId = 'aaa';

    _chai["default"].request(_index["default"])["delete"]("/api/v1/contacts/".concat(contactId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql("Please provide a numeric value");
      done();
    });
  });
});
//# sourceMappingURL=test.js.map