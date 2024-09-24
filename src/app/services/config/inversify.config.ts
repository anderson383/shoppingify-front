import 'reflect-metadata';

import { TYPES } from './types';
import { Container } from 'inversify';
import { ShopRepository } from '../repositories/shop.repository';
import { ShopService } from '../repositories/shop.service';
import { ConfigRepository } from '../repositories/config.repository';
import { ConfigService } from '../repositories/config.service';
import { AuthRepository } from '../repositories/auth.repository';
import { AuthService } from '../repositories/auth.service';

const repositoryContainer = new Container();

repositoryContainer.bind<ShopRepository>(TYPES.SHOP_REPOSITORY).to(ShopService);
repositoryContainer.bind<ConfigRepository>(TYPES.CONFIG_REPOSITORY).to(ConfigService);
repositoryContainer.bind<AuthRepository>(TYPES.AUTH_REPOSITORY).to(AuthService);
export { repositoryContainer };
