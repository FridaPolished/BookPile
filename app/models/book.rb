# == Schema Information
#
# Table name: books
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  author       :string           not null
#  year         :string
#  description  :text
#  image_url    :string
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  bookshelf_id :integer
#

class Book < ApplicationRecord

    validates :title, :author, presence: true

    has_one_attached :cover

end
