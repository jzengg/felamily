class Api::CatsController < ApplicationController
  
  def index
    @cats = Cat.order(updated_at: :desc).all
  end

  def show
    @cat = Cat.find(params[:id])
  end

  def create
    @cat = Cat.create!(cat_params)
    render :show
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :available, :profile_image, :sex, :location)
  end

end
