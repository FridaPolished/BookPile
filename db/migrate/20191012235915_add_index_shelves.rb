class AddIndexShelves < ActiveRecord::Migration[5.2]
  def change
    add_index :shelves, :book_id
    add_index :shelves, :bookshelf_id
  end
end
