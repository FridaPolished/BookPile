class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.string  :name, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :bookshelves, :name
  end
end
