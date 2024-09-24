
import {injectable} from 'inversify'
import { axiosInstance } from '../../core/config/axiosConfig';
import { AuthRepository, LoginType } from './auth.repository';

@injectable()
export class AuthService implements AuthRepository {
  
  async login(values: LoginType) {
    try {
      const { data } = await axiosInstance.post< { access_token: string, refresh_token: string }>('/auth/login', values)
      return data.access_token
    } catch (e:any) {
      console.error('Hubo un error: ' + e.message)
      return null
    }
  }
}
