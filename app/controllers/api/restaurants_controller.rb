class Api::RestaurantsController < ApplicationController
  
  
  def index
    # cities = ["los angeles"]
    # cuisines = ["chinese", "italian", "japanese", "korean", "indian", "thai", "mediterranean", "californian", "mexican"]

    # if !params[:searchTerm]
    #   @restaurants = Restaurant.all
    # else
    #   if cities.include?(params[:searchTerm].downcase)
    #     @restaurants = Restaurant.where('lower(city) LIKE ?', params[:searchTerm].downcase)
    #   elsif cuisines.include?(params[:searchTerm].downcase)
    #     @restaurants = Restaurant.where('lower(category) LIKE ?', params[:searchTerm].downcase)
    #   else
    #     @restaurants = Restaurant.all
    #   end
    # end

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

  def show
    @restaurant = Restaurant.with_attached_photos.find(params[:id])
    render :show
  end

  def search
    query = params[:query]
    # debugger
    @restaurants = (query) ? Restaurant.where("category ILIKE ? OR city ILIKE ?", "%#{query}%", "%#{query}%") : Restaurant.all
    # debugger
    # if @restaurants.length > 0
      render :index
    # end
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :category, :address, :city, photos: [])
  end

  # def search_term
  #   params.require(:searchTerm)
  # end

end