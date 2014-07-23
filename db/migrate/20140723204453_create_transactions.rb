class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :task_id, null: false
      t.datetime :completion_datetime, null: false
      
      t.timestamps
    end
    add_index :transactions, :task_id
    add_index :transactions, :completion_datetime
  end
end
