import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Wishlist } from './wishlist.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { WishlistCreationDto } from './wishlist-creation.dto';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: EntityRepository<Wishlist>,

    private readonly entityManager: EntityManager,
  ) {}

  async create(wishlistDto: WishlistCreationDto): Promise<Wishlist> {
    const wishlist = this.wishlistRepository.create(wishlistDto);
    await this.entityManager.flush();
    return wishlist;
  }

  async findByName(name: string) {
    return this.wishlistRepository.findOne({ recipient: name });
  }
}
