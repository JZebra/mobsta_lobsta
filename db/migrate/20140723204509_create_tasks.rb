class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :poster_id, null: false
      t.integer :lobster_id
      t.string :title
      t.text :description
      t.string :category, null: false
      t.string :zipcode, limit: 10
      t.date :date, null: false
      t.integer :timeframe, null: false
      t.string :address
  
      t.timestamps
    end
    add_index :tasks, :poster_id
    add_index :tasks, :lobster_id
    add_index :tasks, :title
    add_index :tasks, :category
    add_index :tasks, :zipcode
    add_index :tasks, :date
    add_index :tasks, :timeframe
  end
end
