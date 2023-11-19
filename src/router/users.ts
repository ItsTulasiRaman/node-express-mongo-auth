import { deleteUser, getAllUsers, updateUser } from '../controllers/users'
import express from 'express'
import { isAuthenticated, isOwner } from '../middlewares';

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);   // adding is isAuthenticated function allows to fetch users only when the user is logged in i.e user data is saved in cookies
    router.delete('/users/:id',isAuthenticated, isOwner, deleteUser)
    router.patch('/users/:id',isAuthenticated, isOwner, updateUser)
}
