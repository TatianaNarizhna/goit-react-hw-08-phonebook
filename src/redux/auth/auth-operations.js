import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {

}

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        return data; 
    } catch (error) {
        console.error( error.message);
    }
});


const logOut = () => {

}

const authOperations = {
    token,
    register,
    logOut,
}

export default authOperations;
