import { useRepositoryIoc } from '../../services/config/context';
import { TYPES } from '../../services/config/types';
import { ShopRepository } from '../../services/repositories/shop.repository';

const useShopRepository = () : ShopRepository => {
  const { container } = useRepositoryIoc();
  return container.get(TYPES.SHOP_REPOSITORY);
};

export default useShopRepository;
