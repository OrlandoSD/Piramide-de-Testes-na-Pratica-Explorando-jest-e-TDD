import { UserController } from './UserController'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { User } from '../entities/User'
import { getMockUser } from '../__mocks__/mockUser'
import { makeMockResponse } from '../__mocks__/mockResponse'

const mockUser: User = getMockUser()
jest.mock('../service/UserService', () => {
    return{
        UserService: jest.fn().mockImplementation(() => {
            return {
                createUser: jest.fn().mockImplementation(() => Promise.resolve(mockUser))
            }
        })
    }           
})

describe('UserController', () => {
    const userController = new UserController()
  

    it('Deve retornar status 201 e o usuário criado', async () =>{
        const request = makeMockRequest({
            body: {
                name: 'Algum nome',
                email: 'email@dio.ex'

            }
        })

        const response = makeMockResponse()
        await userController.createUser(request, response)
        expect(response.state.status).toBe(201)
        expect(response.state.json).toHaveProperty('user_id')
        expect(response.state.json).toMatchObject({
            name: 'Algum nome',
            email: 'email@dio.ex'
        })
    })
})