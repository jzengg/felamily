class Api::CatsController < ApplicationController


  def index
    @cats = Cat.order(updated_at: :desc).all
    @available = Cat.available
  end

  def show
    @cat = Cat.find(params[:id])
  end

  def create
    @cat = current_user.cats.new(cat_params)
    if @cat.save
      render :show
    else
      render json: @cat.errors.full_messages, status: 422
    end
  end

  def update
    @cat = Cat.find(params[:id])
    if @cat.update(cat_params)
      render :show
    else
      render json: @cat.errors.full_messages, status: 422
    end
  end

  def destroy
    @cat = Cat.find(params[:id])
    @cat.destroy!
    render json: {}
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :available, :profile_image, :sex, :location, :creator_id, :description)
  end

end
