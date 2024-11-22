import { Migration } from '@mikro-orm/migrations';

export class Migration20241122021458_add_wishlist_table extends Migration {

  override async up(): Promise<void> {
    this.addSql(`      CREATE TABLE "wishlist" (
        "id" serial PRIMARY KEY,
        "recipient" varchar(255) NOT NULL,
        "items" TEXT[] NOT NULL
      );`);
  }

  override async down(): Promise<void> {
    this.addSql(`      DROP TABLE IF EXISTS "wishlist" cascade;`);
  }

}
