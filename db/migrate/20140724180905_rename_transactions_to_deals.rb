class RenameTransactionsToDeals < ActiveRecord::Migration
  def change
    rename_table :transactions, :deals
  end
end
