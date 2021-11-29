class Api::RestaurantsController < ApplicationController
  
  
  def index
    cities = ["Los Angeles"]
    cuisines = ["Chinese", "Italian", "Japanese", "Korean"]
    if !params[:searchTerm]
      @restaurants = Restaurant.all
    else
      if cities.include?(params[:searchTerm])
        @restaurants = Restaurant.where(city: params[:searchTerm])
      elsif cuisines.include?(params[:searchTerm])
        @restaurants = Restaurant.where(category: params[:searchTerm])
      else
        @restaurants = Restaurant.all
      end
    end
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

  def show
    @restaurant = Restaurant.with_attached_photos.find(params[:id])
    render :show
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :category, :address, :city, photos: [])
  end

  def search_term
    params.require(:searchTeerm)
  end

end