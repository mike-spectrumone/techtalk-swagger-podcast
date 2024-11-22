import { Embeddable, Property } from '@mikro-orm/core';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

@Embeddable()
export class WishlistItem {
  /**
   * Name or description of the item.
   *
   * @example Macbook Pro 16
   */
  @Property()
  @IsString()
  @IsNotEmpty()
  item: string;

  /**
   * URL to the item in any ecommerce site.
   *
   * @example https://apple.com
   */
  @Property()
  @IsUrl()
  ecommerceUrl: string;
}
