class UsersController < ApplicationController
  def new
  end
  
  def index
    @users = User.all
    render json: @users
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      # render json: @user
      redirect_to root_url
    else
      # render json: @user.errors.full_messages, status: :unprocessable_entity
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password, :name, :phone1)
  end
end
