import { useRepositoryIoc } from '../../services/config/context';
import { TYPES } from '../../services/config/types';
import { AuthRepository } from '../../services/repositories/auth.repository';

const useAuthRepository = () : AuthRepository => {
  const { container } = useRepositoryIoc();
  return container.get(TYPES.AUTH_REPOSITORY);
};

export default useAuthRepository;
