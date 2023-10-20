import prisma from '.'

// Example seed data

const main = async () => {
  const user = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: { name: 'alison' },
    create: {
      email: 'alice@example.com',
      name: 'alice',
      //??
      password: '12345'
    },
  })
  console.log({ user })
}

await main()
