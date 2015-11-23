class Api::VaccinesController < ApplicationController

  def create
    @cat = Cat.find(params[:id])
    @vaccine = @cat.vaccines.create!(vaccine_params)
    render :show
  end

  def update
  end

  private
  def vaccine_params
    params.require(:vaccine).permit(:cat_id, :type, :given, :expires, :comments)
  end

end
