class ContactsController < ApplicationController

  skip_before_action :check_xhr,
                     :verify_authenticity_token,
                     :redirect_to_login_if_required,
                     raise: false


  def index
    Rails.logger.info 'Called ContactsController#index'
    contacts = ContactStore.get_contacts()

    render json: { contacts: contacts.values }
  end

  def update
    Rails.logger.info 'Called ContactsController#update'

    contact_id = params[:contact_id]
    contact = {
      'id' => contact_id,
      'name' => params[:contact][:name],
      'email' => params[:contact][:email],
      'phone' => params[:contact][:phone],
      'message' => params[:contact][:message]

    }

    ContactStore.add_contact(contact_id, contact)

    @date=Time.now.strftime('%a, %-d %b %Y %H:%M:%S')

    @mail="
Date: #{@date}
From: #{contact['email'] || "unknown@example.com"}
To: jons-biography@beta.buildcivitas.com
Subject: Contact from #{contact['name']} - #{@date}


Name:  #{contact['name']}
Phone: #{contact['phone']}
Email: #{contact['email']}

Message:

> #{contact['message']}"


    Mail.new(@mail).message_id.presence

    receiver = Email::Receiver.new(@mail)
    receiver.process!


    render json: { contact: contact }
  end

  def destroy
    Rails.logger.info 'Called ContactsController#destroy'

    ContactStore.remove_contact(params[:contact_id])

    render json: success_json
  end
end
