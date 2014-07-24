class Api::TasksController < ApplicationController
  before_action :require_signed_in!
  
  def create
  end
  
  def destroy
  end
  
  
  private
  
  def task_params
    params.require(:task).permit(:title)
end
