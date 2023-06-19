import { prisma } from "@/config";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

const userRepository = {
  findByEmail,
};

export default userRepository;
