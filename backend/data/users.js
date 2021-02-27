//! USER DATA:
import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Morah Onserio',
    email: 'morah@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Khaliah Onserio',
    email: 'khalia@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

export default users;
