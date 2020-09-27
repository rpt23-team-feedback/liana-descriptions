import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedData = {
  names: [],
  marketValues: [],
  logoURLs: [],
  helpers: [],
  minCosts: [],
};

