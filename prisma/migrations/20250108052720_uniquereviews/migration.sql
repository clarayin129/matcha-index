/*
  Warnings:

  - A unique constraint covering the columns `[user,powderId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Review_user_powderId_key" ON "Review"("user", "powderId");
