/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Powder` will be added. If there are existing duplicate values, this will fail.
  - Made the column `pricePerGram` on table `Powder` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Powder" ALTER COLUMN "pricePerGram" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Powder_name_key" ON "Powder"("name");

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

ALTER TABLE "Brand"
ALTER COLUMN "id" TYPE UUID USING "id"::UUID,
ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();

ALTER TABLE "Powder"
ALTER COLUMN "id" TYPE UUID USING "id"::UUID,
ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
ALTER COLUMN "brandId" TYPE UUID USING "brandId"::UUID;
