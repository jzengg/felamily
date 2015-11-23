class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create

    @user = User.create!(user_params)
    sign_in!(@user)
    render :show
    # @user = User.new(user_params)
    # if @user.save
    #   render json: { errors: @user.errors.full_messages }, error: 400
    #
    # end
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
