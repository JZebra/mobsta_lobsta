class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :poster_id, null: false
      t.integer :lobster_id
      t.string :category, null: false
      t.varchar(10) :zipcode
      t.date :date, null: false
      t.integer :timeframe, null: false
      t.string :address
      t.text :description
      
      t.timestamps
    end
    add_index :tasks, :poster_id
    add_index :tasks, :lobster_id
    add_index :tasks, :category
    add_index :tasks, :zipcode
    add_index :tasks, :date
    add_index :tasks, :timeframe
  end
end
