class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :category, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :lobster_id, null: false
      t.date :task_date
      t.integer :score, null: false

      t.timestamps
    end
    add_index :reviews, :category
    add_index :reviews, :author_id
    add_index :reviews, :lobster_id
    add_index :reviews, :task_date
    add_index :reviews, :score
  end
end
