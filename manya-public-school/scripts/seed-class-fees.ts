import { prisma } from "../src/lib/prisma";

const fees = [
  ["Nursery", 0, 300],
  ["L.K.G", 0, 350],
  ["U.K.G", 0, 400],
  ["1st", 0, 450],
  ["2nd", 0, 500],
  ["3rd", 0, 550],
  ["4th", 0, 500],
  ["5th", 0, 550],
  ["6th", 0, 600],
  ["7th", 0, 700],
  ["8th", 0, 800],
  ["9th", 0, 900],
  ["10th", 0, 1000],
] as const;

async function main() {
  for (const [className, admissionFee, monthlyFee] of fees) {
    const existing = await prisma.classFee.findFirst({
      where: { className },
    });

    if (!existing) {
      await prisma.classFee.create({
        data: {
          className,
          admissionFee,
          monthlyFee,
          annualFee: monthlyFee * 12,
          isPublished: true,
        },
      });
    }
  }

  console.log("CLASS FEE DATA READY");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
