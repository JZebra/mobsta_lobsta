class Api::TasksController < ApplicationController
  
  def create
    @task = current_user.posted_tasks.new(task_params)
    
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: :unprocessable_entity
    end
  end
  
  def destroy
  end
  
  
  private
  
  def task_params
    params.require(:task).permit(:title, :description, :cat_id, :phone, :zipcode, 
                                :address, :date, :timeframe, :lobster_id)
  end
end