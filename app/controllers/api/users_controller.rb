class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.create!(user_params)
    render :show
  end

  def show
    @user = User.find(params[:id])
    render :show
  end



  protected

  def user_params
    self.params.require(:user).permit(:username, :password)
  end
end
