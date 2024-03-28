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
        };
      })
  },

  actions: {
    createContact(name, email, phone, message) {

      const contactRecord = this.store.createRecord('contact', {
        id: Date.now(),
        name,
        email,
        phone,
        message
      });

      contactRecord.save()
        .then(result => {
          this.contacts.pushObject(result.target);
        };)
    },

    deleteContact(contact) {
      this.store.destroyRecord('contact', contact)
        .then(() => {
          this.contacts.removeObject(contact);
        };)
    }
  };
})
