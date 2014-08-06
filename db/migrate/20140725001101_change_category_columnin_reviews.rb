class ChangeCategoryColumninReviews < ActiveRecord::Migration
  def change
    remove_column :reviews, :category
    add_column :reviews, :cat_id, :integer
  end
end
