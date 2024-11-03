import instance from '~/utils/apiUtils';

export const getAllUsers = async () => {
    const response = await instance.get(`/api/users`);
    return response.data;
}

export const getUserById = async (userId) => {
    const response = await instance.get(`/api/users/${userId}`);
    return response.data;
}

export const addUser = async () => {
    const response = await instance.post(`/api/users`, {

    });
    return (response.status === 200) ? true : false;
}

export const updateUser = async () => {
    const response = await instance.put(`/api/users`, {

    });
    return (response.status === 200) ? true : false;
}

export const deleteUserById = async (userId) => {
    const response = await instance.delete(`/api/users/${userId}`);
    return response.data;
}