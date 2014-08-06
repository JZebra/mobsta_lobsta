class AddIndexToCatIDinReviews < ActiveRecord::Migration
  def change
    add_index :reviews, :cat_id
  end
end
