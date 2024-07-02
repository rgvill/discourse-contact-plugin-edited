# coding: utf-8
# frozen_string_literal: true
class ContactStore
  class << self
    def get_contacts
      PluginStore.get("contact", "contacts") || {}
    end

    def add_contact(contact_id, contact)
      contacts = get_contacts()
      contacts[contact_id] = contact
      PluginStore.set("contact", "contacts", contacts)

      contact
    end

    def remove_contact(contact_id)
      contacts = get_contacts()
      contacts.delete(contact_id)
      PluginStore.set("contact", "contacts", contacts)
    end
  end
end
