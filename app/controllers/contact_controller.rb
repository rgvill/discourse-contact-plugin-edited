# coding: utf-8
# frozen_string_literal: true
class ContactController < ApplicationController

#  skip_before_action :check_xhr, raise: false
  skip_before_action :check_xhr,
                     #:verify_authenticity_token,
                     #:redirect_to_login_if_required,
                     raise: false


  def index
    Rails.logger.info '🚂 Called the `ContactController#index` method.'
  end
end
