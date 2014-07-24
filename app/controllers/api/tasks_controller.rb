class Api::TasksController < ApplicationController
  
  def create
  end
  
  def destroy
  end
  
  
  private
  
  def task_params
    params.require(:task).permit(:title)
  end
end
