# == Schema Information
#
# Table name: shelves
#
#  id           :integer          not null, primary key
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Shelf < ApplicationRecord

  belongs_to :bookshelf

  belongs_to :book

end
