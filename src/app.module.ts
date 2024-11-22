import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [MikroOrmModule.forRoot(), WishlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
