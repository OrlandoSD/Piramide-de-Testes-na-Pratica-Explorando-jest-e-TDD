import { UserController } from './UserController'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { request, Request, response } from 'express'
import { User } from '../entities/User'
import { getMockUser } from '../__mocks__/mockUser'
import { makeMockResponse } from '../__mocks__/mockResponse'

const mockUser: User = getMockUser()
 
let mockReturnCreateUser
jest.mock('../service/UserService', () => {
    return{
        UserService: jest.fn().mockImplementation(() => {
            return {
                createUser: mockReturnCreateUser
            }
        })
    }           
})

describe('UserController', () => {
    const userController = new UserController()
  

    it('Deve retornar status 201 e o usuário criado', async () =>{
        const request = makeMockRequest()
        const request{
            body: {
                name: 'Algum nome',
                email: 'email@dio.ex'

            }
        }as Resquest

        const response = makeMockResponse()
        mockReturnCreate = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        await userController.createUser(request, response)
        expect(response.state.status).toBe(201)
        expect(response.state.json).toHaveProperty('user_id')
        expect(response.state.json).toMatchObject({
            name: 'Algum nome',
            email: 'email@dio.ex'
        })
    })

    it('deve retornar status 400 quando o usuário não informar name e email', async () =>{

        const request = makeMockRequest({
            body: {
                name: '',
                email: ''
            }
        })
        await userController.createUser(request, response)
        expect(response.state.status).toBe(400)
    })
    

    it('deve retornar status 500 quando ocorrer um erro', async =>{
        mockReturnCreateUser = jest.fn.mockImplementation(()=>{
            throw new Error()
        })
        await userController.createUser(request, response)
        expect(response.state.status).toBe(500)
    })
})