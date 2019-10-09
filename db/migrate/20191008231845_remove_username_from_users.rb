class RemoveUsernameFromUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string, null: false
    remove_column :users, :username
  end
end
