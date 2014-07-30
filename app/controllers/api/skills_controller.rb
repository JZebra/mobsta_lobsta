class Api::SkillsController < ApplicationController
  before_action :require_signed_in!
  
  def index
    @skills = User.find(params[:user_id]).skills
    render json: @skills
  end
  
  # def show
  #   @skills = User.find(current_user.id).skills
  #   render json: @skills
  # end
  
  def create
    @skill = current_user.skills.new(skill_params)
    
    if @skill.save
      render json: @skill
    else
      render json: @skill.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
    @skill = Skill.find(params[:id])
    @skill.destroy
    render json: {}
  end
  
  def update
    @skill = current_board.lists.find(params[:id])

    if @skill.update_attributes(skill_params)
      render json: @skill
    else
      render json: @skill.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  private
  def skill_params
    params.require(:skill).permit(:cat_id, :pitch, :rate)
  end
end
