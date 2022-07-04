import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:5001/'
})

describe('/user', () =>{
    it('Deve retornar o status 200', async () =>{
        const user = server.post('/user', {
            name: 'Algum usuário',
            email: 'email@dio.ex'
        })

        expect((await user).status).toBe(201)
    })
})