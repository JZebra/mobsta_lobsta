class AddCategoriesTable < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title
      t.timestamps
    end
    add_index :categories, :title
    remove_column :tasks, :category
    add_column :tasks, :cat_id, :integer
  end
end

