class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :require_login

  # before_action :require_login

  def current_user
    return nil if self.session[:session_token].nil?
    @current_user ||= User.find_by(session_token: self.session[:session_token])
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = @current_user.reset_session_token!
  end

  def sign_out!
    current_user.try(:reset_session_token!)
    session[:sesison_token] = nil
  end

  # def require_login
  #   redirect_to new_session_url unless logged_in?
  # end

  def logged_in?
    !!@current_user
  end

end
