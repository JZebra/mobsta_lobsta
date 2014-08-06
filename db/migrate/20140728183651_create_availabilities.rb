class CreateAvailabilities < ActiveRecord::Migration
  def change
    create_table :availabilities do |t|
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :availabilities, :user_id
  end
end
