import Component from '@ember/component';
import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super();
    this.set('contacts', []);
    this.fetchContacts();
  },

  fetchContacts() {
    this.store.findAll('contact')
      .then(result => {
        for (const contact of result.content) {
          this.contacts.pushObject(contact);
        }
      })
      .catch(console.error);
  },

  actions: {
    createContact(name, email, phone, message) {

      const contactRecord = this.store.createRecord('contact', {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        message: message
      });

      contactRecord.save()
        .then(result => {
          this.contacts.pushObject(result.target);
        })
        .catch(console.error);
    },

    deleteContact(contact) {
      this.store.destroyRecord('contact', contact)
        .then(() => {
          this.contacts.removeObject(contact);
        })
        .catch(console.error);
    }
  }
})
