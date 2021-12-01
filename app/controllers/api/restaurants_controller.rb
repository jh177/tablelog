class Api::RestaurantsController < ApplicationController
  
  
  def index
    cities = ["los angeles"]
    cuisines = ["chinese", "italian", "japanese", "korean"]

    if !params[:searchTerm]
      @restaurants = Restaurant.all
    else
      if cities.include?(params[:searchTerm].downcase)
        @restaurants = Restaurant.where('lower(city)=?', params[:searchTerm].downcase)
      elsif cuisines.include?(params[:searchTerm].downcase)
        @restaurants = Restaurant.where('lower(category)=?', params[:searchTerm].downcase)
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