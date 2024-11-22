import { Body, Controller, Post } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistCreationDto } from './wishlist-creation.dto';

@Controller('/wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  /**
   * Create a new wishlist.
   *
   * @param wishlist The request body.
   * @returns A promise that resolves to the created wishlist.
   */
  @Post('/')
  async create(@Body() wishlist: WishlistCreationDto) {
    return this.wishlistService.create(wishlist);
  }
}
