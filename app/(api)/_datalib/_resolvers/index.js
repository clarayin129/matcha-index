import { mergeResolvers } from '@graphql-tools/merge';

import User from './User.js';
import Playlist from './Playlist.js';
import Song from './Song.js';
import Brand from './Brand.js';
import Powder from './Powder.js';

const allResolvers = [];

const modules = [User, Playlist, Song, Brand, Powder];
modules.forEach((module) => {
  allResolvers.push(module);
});

const resolvers = mergeResolvers(allResolvers);

export default resolvers;
