class Api::CatsController < ApplicationController
  def index
    @cats = Cat.all
    render json: @cats
  end

  def show
    @cat = Cat.find(params[:id])
    render json: @cat
  end
end
