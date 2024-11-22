import { Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Allow, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { WishlistItem } from './wishlist-item.entity';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

/**
 * A wishlist entity.
 */
@Entity()
export class Wishlist {
  /**
   * The ID of the wishlist.  It is unique and auto-incremented.
   *
   * @example 14
   */
  @PrimaryKey({ autoincrement: true })
  id: number;

  /**
   * The name of the recipient of the wishlist.  Currently there's no authentication, and the
   * wishlist is built on trust and honesty of S1 employees.
   *
   * @example Juswa
   */
  @Property()
  @IsString()
  @IsNotEmpty()
  recipient: string;

  /**
   * The items in the wishlist.
   */
  @ApiProperty({
    example: [
      {
        item: 'MacBook Pro 16"',
        ecommerceUrl: 'https://www.apple.com/macbook-pro-16/',
      },
    ],
  })
  @Embedded()
  @ValidateNested({ each: true })
  @Type(() => WishlistItem)
  items: WishlistItem[] = [];
}
