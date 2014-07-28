class CreateAvailabilityMarkers < ActiveRecord::Migration
  def change
    create_table :availability_markers do |t|
      t.integer :availability_id, null: false
      t.float :lat, :precision=>10, :scale=>6, null: false
      t.float :lng, :precision=>10, :scale=>6, null: false
      t.timestamps
    end
    add_index :availability_markers, :availability_id
  end
end
