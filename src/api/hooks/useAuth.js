import {useMutation} from 'react-query'
import apiClient from '../apiClient'

export const useRegister = () => {
    return useMutation(async(userData) => {
        const response = await apiClient.post('/auth/signup' , userData)
        return response.data
    })
}

export const useLogin = () => {
    return useMutation(async(loginData)=>{

        const response = await apiClient.post('/auth/login' , loginData)

        return response.data
    })
}