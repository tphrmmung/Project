const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('12345')
const adminP = bcrypt.hashSync('admin')
const userData = [
    {username : 'tip', password , email : 'tip@gmail.com',firstname:'tip', phone : "0321654789",role:'USER' },
    {username : 'Jeff', password , email : 'jsff@gmail.com', firstname:'tip',phone : "0321654789",role:'USER' },
    {username : 'Bonz', password , email : 'Bonz@gmail.com', firstname:'tip',phone : "0321654789", role:'ADMIN' },
    {username : 'benz', password , email : 'Benz@gmail.com',firstname:'tip',phone : "0321654789", role:'USER' },
    {username : 'war', password , email : 'war@gmail.com',firstname:'tip',phone : "0321654789",  role:'ADMIN'},
    {username : 'admin', password: adminP , email : 'admin@gmail.com',firstname:'admin',phone : "0000000000",  role:'ADMIN'},

]

// const todoData = [
    
//     { title : 'Learn HTML' , duedate : new Date(), userId: 1},
//     { title : 'Learn HTML' , duedate : new Date(), userId: 2},
//     { title : 'Learn CSS' , duedate : new Date(), userId: 4},
//     { title : 'Learn JS' , duedate : new Date(), userId: 5},
   
// ]

const run = async () => {
    // await prisma.user.deleteMany({})
    await prisma.user.createMany({
        data : userData
    })

    
    // prisma.$executeRaw`Drop database ccac01_connect`
    // prisma.$executeRaw`create database ccac01_connect`


    
    // await prisma.user.createMany({
    //     data : userData,
    // });
    // await prisma.tod.createMany({
    //     data : todoData,
    // })
}

run()                                                                                                     