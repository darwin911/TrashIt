# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = {
  darwin: {
    name: 'Darwin Smith',
    email: 'darwinpsmith@gmail.com',
    password: 'pass',
    picture: 'https://randomuser.me/api/portraits/men/18.jpg'
  },
  test: {
    name: 'test',
    email: 'test@test.com',
    password: 'test',
    picture: 'https://randomuser.me/api/portraits/men/11.jpg'
  }
}

User.create(users.values)