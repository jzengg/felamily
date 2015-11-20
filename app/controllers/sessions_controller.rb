class SessionsController < ApplicationController
  # skip_before_action :require_login, only: [:create, :new]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )
    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      @user = User.new
      flash.now[:errors] = ["Failed to login"]
      render :new
    end

  end

  def destroy
    sign_out!
    redirect_to new_session_url

  end

end
