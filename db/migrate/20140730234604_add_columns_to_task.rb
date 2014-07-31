class AddColumnsToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :phone, :string, limit: 15
  end
end
