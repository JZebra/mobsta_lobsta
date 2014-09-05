class UsersController < ApplicationController
  wrap_parameters :user, include: [:image]
  
  def new
  end
  
  def index
    @users = User.all
    render "index.json.jbuilder"
  end
  
  def show
    @user = User.find(params[:id])
    render "show.json.jbuilder"
  end
  
  def current
    render json: current_user
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to splash_url
    end
  end
  
  def update
    @user = User.find(params[:id])
    
    if @user.update_attributes(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  
  private
  def user_params
    params.require(:user).permit(:email, :password, :name, 
                                :phone1, :phone2, :zipcode, 
                                :image)
  end
end
