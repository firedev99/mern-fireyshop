import bcrypt from "bcryptjs";

const users = [
    {
        name: "Fire Dev",
        email: 'firedev@fireyshop.com',
        password: bcrypt.hashSync('test1234', 10),
        isAdmin: true
    },
    {
        name: 'Jessie Pinkman',
        email: 'pinkman@fireyshop.com',
        password: bcrypt.hashSync('test1234', 10)
    },
    {
        name: 'Walter White',
        email: 'walter@fireyshop.com',
        password: bcrypt.hashSync('test1234', 10)
    }
]

export default users;