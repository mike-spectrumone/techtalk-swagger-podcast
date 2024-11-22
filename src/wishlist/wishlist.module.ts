import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Wishlist } from './wishlist.entity';
import { WishlistService } from './wishlist.service';
import { WishlistController } from './wishlist.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Wishlist])],
  providers: [WishlistService],
  controllers: [WishlistController],
})
export class WishlistModule {}
