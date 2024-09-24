import { useRepositoryIoc } from '../../services/config/context';
import { TYPES } from '../../services/config/types';
import { ConfigRepository } from '../../services/repositories/config.repository';

const useConfigRepository = () : ConfigRepository => {
  const { container } = useRepositoryIoc();
  return container.get(TYPES.CONFIG_REPOSITORY);
};

export default useConfigRepository;
