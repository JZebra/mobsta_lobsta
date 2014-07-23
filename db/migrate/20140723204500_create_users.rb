class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.varchar(20) :phone1, null: false
      t.varchar(20) :phone2
      t.varchar(10) :zipcode
      t.string :password_digest, null: false
      t.string :token, null: false
      
      t.timestamps
    end
    add_index :users, :name
    add_index :users, :email
    add_index :users, :zipcode
    add_index :users, :delivery_rate
  end
end

# not yet implemented: notifications, billing info, transactions, bank acct, user images