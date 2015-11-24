class Api::VaccinesController < ApplicationController

  def create
    @cat = Cat.find(params[:cat_id])
    @vaccine = @cat.vaccines.create!(vaccine_params)
    render json: @vaccine
  end

  def update
    @vaccine = Vaccine.find(params[:id])
    @vaccine.update!(vaccine_params)
    @cat = @vaccine.cats.first
    render 'api/cats/show'
  end

  private
  def vaccine_params
    params.require(:vaccine).permit(:category, :given, :expires, :comments)
  end

end
