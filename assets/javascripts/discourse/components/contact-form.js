import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super();
    this.set("contacts", []);
    /* TODO: I've disabled the /contacts route to avoid leaking user data. */
    //this.fetchContacts();
  },

  fetchContacts() {
    this.store.findAll("contact").then((result) => {
      for (const contact of result.content) {
        this.contacts.pushObject(contact);
      }
    });
  },

  actions: {
    createContact(name, email, phone, message) {
      const contactRecord = this.store.createRecord("contact", {
        id: Date.now(),
        name,
        email,
        phone,
        message,
      });

      $(".thanks").show();
      $("#contact-form button").hide();
    },

    deleteContact(contact) {
      this.store.destroyRecord("contact", contact).then(() => {
        this.contacts.removeObject(contact);
      });
    },
  },
});
