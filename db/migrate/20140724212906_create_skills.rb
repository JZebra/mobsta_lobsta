class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.integer :user_id, null: false
      t.integer :cat_id, null: false
      t.integer :rate, null: false
      t.string :pitch, null: false

      t.timestamps
    end
    add_index :skills, :user_id
    add_index :skills, :cat_id
    add_index :skills, :rate    
  end
end
