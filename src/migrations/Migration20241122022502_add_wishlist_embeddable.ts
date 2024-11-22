import { Migration } from '@mikro-orm/migrations';

export class Migration20241122022502_add_wishlist_embeddable extends Migration {
  override async up(): Promise<void> {
    this.addSql(`      ALTER TABLE "wishlist"
      DROP COLUMN "items";`);

    this.addSql(`      ALTER TABLE "wishlist"
      ADD COLUMN "items" JSONB NOT NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`      ALTER TABLE "wishlist"
      DROP COLUMN "items";`);

    this.addSql(`      ALTER TABLE "wishlist"
      ADD COLUMN "items" TEXT[] NOT NULL;`);
  }
}
