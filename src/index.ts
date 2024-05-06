import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


//prisma.user.create or
//prisma.user.find or
//prisma.user.delete or
//we can do bunch of steps here


async function insertUser(
    username: string,
    password: string,
    firstname: string,
    lastname: string
){
   const response = await prisma.user.create({
        data: {
            email: username,
            password,
            firstname,
            lastname
        }
    })
    console.log(response)
}