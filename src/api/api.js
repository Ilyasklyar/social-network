import * as axios from 'axios';
import { unfollow } from '../Redux/users-reducer';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b6873824-fd28-4815-b0bf-535d52d2b41b"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method, please profileAPI object')
      return profileAPI.getProfile(userId);

    }
}

export const profileAPI = {
    getProfile(userId) {
      return  instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return  instance.get(`profile/status/${userId}`);   
    },    
    updateStatus(status) {
        return  instance.put(`profile/status`, {status:status});   
    }
}


export const authAPI = {
    me() {
      return instance.get(`auth/me`)
    }
}
