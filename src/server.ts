import { prisma } from "../libs/prisma";

async function main() {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       name: "tanmayy",
  //       email: "hello@email.com",
  //     },
  //   });
  //   console.log({ createUser });
  //   const allUsers = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //     },
  //   })
  //   console.log('All users:', JSON.stringify(allUsers, null, 2))
  // const getASingleUser = await prisma.user.findUnique({
  //     where: {
  //         id: 1
  //     }
  // })
  // console.log(getASingleUser);
  //   const updateUser = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       name: "Tanmay Updated",
  //     },
  //   });
  //   console.log(updateUser);
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(deleteUser);
const usingUpsert = await prisma.user.upsert({
  where: { email: "hello45@gmail.com" },
  update: { name: "Tanmay Updated" },
  create: { name: "Tanmay Created", email: "hello45@gmail.com" },
});
  console.log(usingUpsert);
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
main();
