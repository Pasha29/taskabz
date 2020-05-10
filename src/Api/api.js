import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
})

export const getData = {
     getUsers(moreUsers = 6){
        return instanse.get(`/users?page=1&count=${moreUsers}`).then( (response) => {
            return response.data;
        })
    },
    getRadioboxData() {
        return instanse.get('/positions').then( (response) => {
            return response.data;
        })
    },
    getToken() {
        return instanse.get('/token').then( (response) => {
            return response.data;
        })
    }
}

export const newUser = {
    setUser(userData, token) {
        var formData = new FormData();
        formData.append('position_id', userData.position);
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('phone', userData.phone);
        formData.append('photo', userData.image);
        console.log('token ', token);
        return instanse.post('/users', formData, {
            headers: {
                'Token': token.token,
                'Content-Type': 'multipart/form-data'
            }})
            .then( (response) => {
            console.log('response');
            console.log(response);
            return response;
        })
    }
}

// file from input type='file'
// var fileField = document.querySelector('input[type="file"]');
// formData.append('position_id', 2);
// formData.append('name', 'Jhon');
// formData.append('email', 'Jhon@gmail.com');
// formData.append('phone', '+380955388485');
// formData.append('photo', fileField.files[0]);

// fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
//   method: 'POST',
//   body: formData,
//   headers: {
//     'Token': token, // get token with GET api/v1/token method
//   },
// })