class CreateShelves < ActiveRecord::Migration[5.2]
  def change
    create_table :shelves do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false
      t.timestamps
    end
  end
end
