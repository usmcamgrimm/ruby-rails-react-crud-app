class ApplicationController < ActionController::Base
  protection_from_forgery with :null_session
end
