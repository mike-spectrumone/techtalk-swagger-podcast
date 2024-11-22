import { OmitType } from '@nestjs/swagger';
import { Wishlist } from './wishlist.entity';

export class WishlistCreationDto extends OmitType(Wishlist, ['id']) {}
