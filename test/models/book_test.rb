# == Schema Information
#
# Table name: books
#
<<<<<<< HEAD
#  id          :integer          not null, primary key
#  title       :string           not null
#  author      :string           not null
#  year        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
=======
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
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
#

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
