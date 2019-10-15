class RemoveUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookshelves, :user_id, :integer
  end
end
