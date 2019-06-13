# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Story.delete_all

Story.create title: 'Story 1', story_text: 'this is my story....'
Story.create title: 'The Cod Father', story_text: 'A story about a very powerful fish'