import getEntityManagerMock from '../__mocks__/getEntityManagerMock'
import { UserRepository } from './UserRepository'
import { v4 as uuid } from 'uuid'
import { User } from '../entities/User'

describe('UserRepository', () =>{
    const mockUser: User = {
        user_id: uuid(),
        name: 'Algum nome',
        email: 'email@dio.ex'
    }
   
    it('deve retornar usuario salvo, quando chamar a função save', async () =>{

        const managerMock = await getEntityManagerMock({
            saveReturn: mockUser
        })
        const userRepository = new UserRepository(managerMock)
    

    })
})