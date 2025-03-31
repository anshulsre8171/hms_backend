import express from 'express';
import { userLoginController, userRegisterController } from '../Contollers/CommonController/LoginFunctionController';
export const route=express.Router();
 //common route
route.post("/login",userLoginController)
route.post("/register",userRegisterController)
 //admin route


  //doctor route


   //pate route\
   