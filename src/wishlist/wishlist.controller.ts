import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { WishlistCreationDto } from './wishlist-creation.dto';
import { Wishlist } from './wishlist.entity';
import { WishlistItem } from './wishlist-item.entity';

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

  /**
   * Retrieve the wishlist given the recipient's name.
   *
   * @param name The recipient's name.
   * @returns A promise that resolves to the wishlist.
   */
  @Get('/:name')
  async findAll(@Param('name') name: string): Promise<Wishlist> {
    return this.wishlistService.findByName(name);
  }
}
