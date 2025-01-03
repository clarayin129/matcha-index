/*
  Warnings:

  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Brand` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Powder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Powder` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `Powder` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `brandId` on the `Powder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Brand" DROP CONSTRAINT "Brand_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Brand_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Powder" DROP CONSTRAINT "Powder_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "brandId",
ADD COLUMN     "brandId" UUID NOT NULL,
ADD CONSTRAINT "Powder_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Review" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "powderId" UUID NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Powder_name_key" ON "Powder"("name");
