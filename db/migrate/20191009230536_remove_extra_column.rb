class RemoveExtraColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :"#<ActiveRecord::ConnectionAdapters::PostgreSQL::TableDefinition"
  end
end
