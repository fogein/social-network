import axios from "axios"


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '98f4ebc9-f85c-4248-acce-b3f3feb6f682'
  }
})

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then(res => res.data)
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then(res => res.data)
  },
  getProfile(userId) {
    return instance
      .get(`profile/${userId ? userId : userId = 2}`)
      .then(res => res.data)
  },
  authMe() {
    return instance
      .get(`auth/me`)
      .then(res => res.data)
  },
}