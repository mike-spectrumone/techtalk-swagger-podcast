import path from 'node:path';

import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

import { CustomMigrationGenerator } from './custom-migration-generator';

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error('DATABASE_URL environment variable is missing.');
}

export default defineConfig({
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  clientUrl: url,
  debug: process.env.MIKRO_ORM_DEBUG === 'true', // default false, this creates tons of logs/noise
  metadataProvider: TsMorphMetadataProvider,
  highlighter: new SqlHighlighter(),
  migrations: {
    generator: CustomMigrationGenerator,
    path: './dist/migrations',
    pathTs: './src/migrations',
    disableForeignKeys: false,
  },
  extensions: [Migrator, SeedManager],
  seeder: {
    defaultSeeder: 'EmptyTableSeeder',
    path: './dist/seeds',
    pathTs: './src/seeds',
    glob: '**/*.seeder.{js,ts}',
  },
  // default is temp/ for metadata cache, but it's not confusing to those not familiar with MikroORM
  metadataCache: {
    options: { cacheDir: path.resolve(__dirname, '..', 'orm-cache') },
  },
});
