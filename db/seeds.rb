# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


Book.destroy_all
User.destroy_all
Bookshelf.destroy_all
Shelf.destroy_all

momo = Book.create!(
    title: 'Momo', 
    author: 'Michael Ende',
    year: '1974',
    description: 'The sinister men in grey have arrived and are silently taking over the city. They are drawing life-blood from the unsuspecting inhabitants. They are the time-thieves.
    It is Momo, the ragged little waif, who discovers what is happening. And it is Momo, with her uncanny ability to listen, her simplicity and honesty, who holds the key to salvation. She is the only one who can resist these soulless, corrupt creatures.
    In this intricate and compelling story of a fantastic country, Momo sets out to destroy the enemy. The mysterious Professor Hora and his strangely gifted tortoise, Cassiopeia, will help her.', 
  )
filem = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/68811.jpg')

momo.cover.attach(io: filem, filename: '68811.jpg')

katoren = Book.create!(
    title: 'How to become a King', 
    author: 'Jan Terlouw',
    year:  '1978',
    description: 'Seventeen years after the king of Katoren dies, a boy aspires to win the crown and is tested with seven impossible tasks by six Ministers.', 
    )
    filek = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/995778.jpg')
    katoren.cover.attach(io: filek, filename: '995778.jpg')

lilus =  Book.create!(
    title: 'Lilus Kikus', 
    author: 'Elena Poniatowska, Leonora Carrington (Illustrator)',
    year:  '1954',
    description: 'Collection of short stories', 
    )
    filel = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/7067626._SX318_.jpg')
    lilus.cover.attach(io: filel, filename: '7067626._SX318_.jpg')

encyclo = Book.create!(
    title: 'Encyclopedia of Things That Never Where', 
    author: 'Michael Page, Robert Ingpen (Illustrator)',
    year: '1985', 
    description: 'Detailed, encyclopedia-style entries, supplemented by 300 full-color and black-and-white illustrations, introduce the worlds of imaginative mythology, folklore, literature, and fairy tales. Size D. 15,000 print.' 
    )
    filee = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/561867.jpg')
    encyclo.cover.attach(io: filee, filename: '561867.jpg')

sample_user = User.create!(
    name: 'Sample user',
    email: 'sample@email.com',
    password: 'password'
    )

fantasy_bookshelf = Bookshelf.create!(
    name: 'fantasy',
    user_id: sample_user.id
)
short_stories_bookshelf = Bookshelf.create!(
    name: 'short stories',
    user_id: sample_user.id
)
childrens_bookshelf = Bookshelf.create!(
    name: "children's book",
    user_id: sample_user.id
)

reference_bookshelf = Bookshelf.create!(
    name: 'reference',
    user_id: sample_user.id
)

shelf1 = Shelf.create!(
    book_id: momo.id,
    bookshelf_id: fantasy_bookshelf.id
)
shelf2 = Shelf.create!(
    book_id: katoren.id,
    bookshelf_id: fantasy_bookshelf.id
)
shelf3 = Shelf.create!(
    book_id: lilus.id,
    bookshelf_id: short_stories_bookshelf.id
)
shelf4 = Shelf.create!(
    book_id: momo.id,
    bookshelf_id: childrens_bookshelf.id
)
shelf5 = Shelf.create!(
    book_id: katoren.id,
    bookshelf_id: childrens_bookshelf.id
)
shelf6 = Shelf.create!(
    book_id: lilus.id,
    bookshelf_id: childrens_bookshelf.id
)
shelf7 = Shelf.create!(
    book_id: encyclo.id,
    bookshelf_id: reference_bookshelf.id
)