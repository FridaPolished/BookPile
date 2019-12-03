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

wind =  Book.create!(
        title: "The Wind in the Willows",
        author: "Kenneth Grahame, Gillian Avery (Introduction)",
        year: "1908",
        description: "Meet little Mole, willful Ratty, Badger the perennial bachelor, and petulant Toad. Over one hundred years since their first appearance in 1908, they've become emblematic archetypes of eccentricity, folly, and friendship. And their misadventures-in gypsy caravans, stolen sports cars, and their Wild Wood-continue to capture readers' imaginations and warm their hearts long after they grow up. Begun as a series of letters from Kenneth Grahame to his son, The Wind in the Willows is a timeless tale of animal cunning and human camaraderie. This Penguin Classics edition features an appendix of the letters in which Grahame first related the exploits of Toad."
        )
        filew = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/wind.jpg')
        wind.cover.attach(io:filew, filename: 'wind.jpg')

maid = Book.create!(
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    year: "1985",
    description: "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now..."
    )
    filemaid = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/maid.jpg')
    maid.cover.attach(io: filemaid, filename: 'maid.jpg')

monster = Book.create!(
    title: "My Favorite Thing Is Monsters, Vol. 1",
    author: 'Emil Ferris',
    year: '2017',
    description: 'Set against the tumultuous political backdrop of late ’60s Chicago, My Favorite Thing Is Monsters is the fictional graphic diary of 10-year-old Karen Reyes, filled with B-movie horror and pulp monster magazines iconography. Karen Reyes tries to solve the murder of her enigmatic upstairs neighbor, Anka Silverberg, a holocaust survivor, while the interconnected stories of those around her unfold. When Karen’s investigation takes us back to Anka’s life in Nazi Germany, the reader discovers how the personal, the political, the past, and the present converge. Full-color illustrations throughout.'
)
    filemons = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/monsters.jpg')
    monster.cover.attach(io: filemons, filename: 'monsters.jpg')

trout = Book.create!(
    title: "Trout Fishing in America",
    author: 'Richard Brautigan',
    year: '1967',
    description: 'Richard Brautigan was a literary idol of the 1960s and 1970s whose comic genius and iconoclastic vision of American life caught the imagination of young people everywhere. He came of age during the Haight-Ashbury period and has been called “the last of the Beats.” His early books became required reading for the hip generation, and on its publication Trout Fishing in America became an international bestseller. An indescribable romp, the novel is best summed up in one word: mayonnaise. This new edition includes an introduction by the poet Billy Collins, who first encountered Brautigan’s work as a student in California.'
)
    filetrout = open('https://bookpile-seeds.s3-us-west-1.amazonaws.com/trout.jpg')
    trout.cover.attach(io: filetrout, filename: 'trout.jpg')




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