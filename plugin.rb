# coding: utf-8
# frozen_string_literal: true

# name:discourse-contact-plugin
# about: Add a contact form
# meta_topic_id: TODO
# version: 0.1.0
# authors: Jon Ericson
# url: https://github.com/jericson/discourse-contact-plugin
# required_version: 2.7.0

enabled_site_setting :contact_form_enabled

register_asset "stylesheets/contact.scss"

module ::MyPluginModule
  PLUGIN_NAME = "discourse-contact-plugin"
end

require_relative "lib/contact/engine"

require_relative File.expand_path("../app/contact_store.rb", __FILE__)

after_initialize do
  require_relative File.expand_path("../lib/contact/contact_controller.rb", __FILE__)
  require_relative File.expand_path("../lib/contact/contacts_controller.rb", __FILE__)

  Discourse::Application.routes.append do
    # Map the path `/contact` to `ContactController`’s `index` method
    get "/contact" => "contact#index"

    get "/contacts" => "contacts#index"
    put "/contacts/:contact_id" => "contacts#update"
    delete "/contacts/:contact_id" => "contacts#destroy"
  end
end
