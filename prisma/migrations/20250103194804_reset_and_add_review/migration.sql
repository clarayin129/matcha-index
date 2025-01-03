/*
  Warnings:

  - The primary key for the `Brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Brand` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Powder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Powder` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaylistToSong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Song` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Powder` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `brandId` on the `Powder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_userId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistToSong" DROP CONSTRAINT "PlaylistToSong_playlistId_fkey";

-- DropForeignKey
ALTER TABLE "PlaylistToSong" DROP CONSTRAINT "PlaylistToSong_songId_fkey";

-- DropForeignKey
ALTER TABLE "Powder" DROP CONSTRAINT "Powder_brandId_fkey";

-- DropTable
DROP TABLE "Playlist";

-- DropTable
DROP TABLE "PlaylistToSong";

-- DropTable
DROP TABLE "Song";

-- DropTable
DROP TABLE "User";
