import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp)
const { expect } = chai;

describe('Testing contact endpoints', () => {
    it('It should create a contact', (done) => {
        const contact = {
            firstname: 'Hannah',
            lastname: 'Werman',
            zip: 60175,
            email: 'hannah.werman@gmail.com',
        };
        chai.request(app)
            .post('/api/v1/contacts')
            .set('Accept', 'application/json')
            .send(contact)
            .end((err, res) => {
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

    it('It should not create a contact with incomplete parameters', (done) => {
        const contact = {
            firstname: "Hannah",
            zip: 60175
        };
        chai.request(app)
            .post('/api/v1/contacts')
            .set('Accept', 'application/json')
            .send(contact)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
    });

    it('It should get all contacts', (done) => {
        chai.request(app)
            .get('/api/v1/contacts')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.data[0].should.have.property('id');
                res.body.data[0].should.have.property('firstname');
                res.body.data[0].should.have.property('lastname');
                res.body.data[0].should.have.property('zip');
                res.body.data[0].should.have.property('email');
                done();
            });
    });

    it('It should get a particular contact', (done) => {
        const contactId = 1;
        chai.request(app)
            .get(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.data.should.have.property('id');
                res.body.data.should.have.property('firstname');
                res.body.data.should.have.property('lastname');
                res.body.data.should.have.property('zip');
                res.body.data.should.have.property('email');
                done();
            }); 
    });

    it('It should not get a contact with an invalid id', (done) => {
        const contactId = 8888;
        chai.request(app)
            .get(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message').eql(`Cannot find contact with the id ${contactId}`)
                done();
            });
    });

    it('It should not get a book with a non-numeric id', (done) => {
        const contactId = 'aaa';
        chai.request(app)
            .get(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property('message').eql('Please input a valid numeric value');
                done();
            });
    });

    it('It should update a contact', (done) => {
        const contactId = 1;
        const updatedContact = {
            id: contactId,
            firstname: "Not Hannah",
            lastname: "Werman",
            zip: 60175,
            email: 'email@email.com'
        };
        chai.request(app)
            .put(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .send(updatedContact)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.data.id).equal(updatedContact.id);
                expect(res.body.data.firstname).equal(updatedContact.firstname);
                expect(res.body.data.lastname).equal(updatedContact.lastname);
                expect(res.body.data.zip).equal(updatedContact.zip);
                expect(res.body.data.email).equal(updatedContact.email);
                done();
            });
    });

    it('It should not update a contact with invalid id', (done) => {
        const contactId = 9999;
        const updatedContact = {
            id: contactId,
            firstname: "Not Hannah",
            lastname: "Werman",
            zip: 60175,
            email: 'email@email.com'
        };
        chai.request(app)
            .put(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .send(updatedContact)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message').eql(`Cannot find contact with the id ${contactId}`);
                done();
            });
    });

    it('It should not update a contact with a non-numeric id value', (done) => {
        const contactId = 'aaa';
        const updatedContact = {
            id: contactId,
            firstname: "Not Hannah",
            lastname: "Werman",
            zip: 60175,
            email: 'email@email.com'
        };
        chai.request(app)
            .put(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .send(updatedContact)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property('message').eql(`Please input a valid numeric value`);
                done();
            });
    });

    it('It should delete a contact', (done) => {
        const contactId = 1;
        chai.request(app)
            .delete(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.data).to.include({});
                done();
            });
    });

    it('It should not delete a contact with invalid id', (done) => {
        const contactId = 9999;
        chai.request(app)
            .delete(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message').eql(`Contact with the id ${contactId} cannot be found`);
                done();
            }); 
    });

    it('It should not delete a contact with non-numeric id', (done) => {
        const contactId = 'aaa';
        chai.request(app)
            .delete(`/api/v1/contacts/${contactId}`)
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(400);
                res.body.should.have.property('message').eql(`Please provide a numeric value`);
                done();
            });
    });
})