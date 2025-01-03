/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Powder` will be added. If there are existing duplicate values, this will fail.
  - Made the column `pricePerGram` on table `Powder` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Powder" ALTER COLUMN "pricePerGram" SET NOT NULL;
