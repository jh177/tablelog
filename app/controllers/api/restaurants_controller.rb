class Api::RestaurantsController < ApplicationController
  
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 401
    end
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :category, :address, :city)
  end

end