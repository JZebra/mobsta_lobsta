class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone1, null: false, limit: 15
      t.string :phone2, limit: 15
      t.string :zipcode, limit: 10
      t.string :password_digest, null: false
      t.string :token, null: false
      
      t.timestamps
    end
    add_index :users, :name
    add_index :users, :email
    add_index :users, :zipcode
  end
end

# not yet implemented: notifications, billing info, transactions, bank acct, user images