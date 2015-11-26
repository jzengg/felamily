class Api::PeopleController < ApplicationController

  def index
    @people = Person.order(updated_at: :desc).all
  end

  def show
    @person = Person.find(params[:id])
  end

  def create
    @person = Person.new(person_params)
    if @person.save
      render :show
    else
      render json: @person.errors.full_messages, status: 422
    end
  end

  def update
    @person = Person.find(params[:id])
    if @person.update(person_params)
      render :show
    else
      render json: @person.errors.full_messages, status: 422
    end
  end

  def destroy
    @person = person.find(params[:id])
    @person.destroy!
    render json: {}
  end

  private
  def person_params
    params.require(:person).permit(:fname, :lname, :profile_image, :email, :zipcode, :creator_id)
  end


end
