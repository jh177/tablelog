class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render json: ["Your email and password don't match. Please try again."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render json: {message: "Logout successful."}
    else
      render json: ['no user logged in'], status: 404
    end
  end

end
