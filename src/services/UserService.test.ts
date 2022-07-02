import { UserService } from './UserService'
import { getMockUser } from '../__mocks__/mockUser'

jest.mock('../repositories/UserRepository')
const mockUserRepository = require('../repositories/UserRepository')


describe('UserService', () => {
    const mockUser = getMockUser()

    const userService = new UserService({
        userRepository: mockUserRepository,
        name: 'Algum usuário',
        email: 'test@dio.ex'
    })

    it('Deve retornar o usuário, quando for salvo', async () =>{
        mockUserRepository.save = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const user = await userService.createUser()
        expect(user).toHaveProperty('user_id')
        expect(user).toMatchObject({
            
        })
    })
})