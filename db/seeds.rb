# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all
User.destroy_all

Book.create!(
title: 'Momo', 
author: 'Michael Ende',
year: '1974',
description: 'The sinister men in grey have arrived and are silently taking over the city. They are drawing life-blood from the unsuspecting inhabitants. They are the time-thieves.
It is Momo, the ragged little waif, who discovers what is happening. And it is Momo, with her uncanny ability to listen, her simplicity and honesty, who holds the key to salvation. She is the only one who can resist these soulless, corrupt creatures.
In this intricate and compelling story of a fantastic country, Momo sets out to destroy the enemy. The mysterious Professor Hora and his strangely gifted tortoise, Cassiopeia, will help her.', 
image_url: '',
bookshelf_id: '')

Book.create!(
    title: 'How to become a King', 
    author: 'Jan Terlouw',
    year:  '1978',
    description: 'Seventeen years after the king of Katoren dies, a boy aspires to win the crown and is tested with seven impossible tasks by six Ministers.', 
    image_url: '',
    bookshelf_id: '')

Book.create!(
    title: 'Lilus Kikus', 
    author: 'Elena Poniatowska, Leonora Carrington (Illustrator)',
    year:  '1954',
    description: 'Collection of short stories', 
    image_url: '',
    bookshelf_id: '')

Book.create!(
    title: 'Encyclopedia of Things That Never Where', 
    author: 'Michael Page, Robert Ingpen (Illustrator)',
    year: '1985', 
    description: 'Detailed, encyclopedia-style entries, supplemented by 300 full-color and black-and-white illustrations, introduce the worlds of imaginative mythology, folklore, literature, and fairy tales. Size D. 15,000 print.', 
    image_url: '',
    bookshelf_id: '')

