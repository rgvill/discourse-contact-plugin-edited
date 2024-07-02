# frozen_string_literal: true

module ::Contact
  class Engine < ::Rails::Engine
    engine_name "discourse-contact-plugin"
    isolate_namespace Contact
    config.autoload_paths << File.join(config.root, "lib/contact")
  end
end
