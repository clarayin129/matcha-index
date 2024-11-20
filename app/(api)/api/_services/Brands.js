import prisma from '../_prisma/client.js';

export default class Brands {
  // CREATE
  static async create({ id, input }) {
    const { name } = input;
    const brand = await prisma.brand.create({
      data: {
        id,
        name,
      },
    });
    return brand;
  }

  // READ
  static async find({ id }) {
    return prisma.brand.findUnique({ where: { id } });
  }

  static async findAll() {
    return prisma.brand.findMany();
  }

  // OTHER
  static async addSong({ playlistId, songId }) {
    try {
      await prisma.playlistToSong.create({
        data: {
          playlistId,
          songId,
        },
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  static async getSongs({ id }) {
    const songIds = await prisma.playlistToSong.findMany({
      where: {
        playlistId: id,
      },
      select: {
        songId: true,
      },
    });
    const songs = await prisma.song.findMany({
      where: {
        id: {
          in: songIds.map((obj) => obj.songId),
        },
      },
    });

    return songs;
  }
}
