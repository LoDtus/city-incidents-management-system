import instance from '../utils/apiUtils';

export async function getAll () {
    const response = await instance.get(`/api/users/get-all`);
    return response.data;
}

export async function getById(id) {
    const response = await instance.get(`/api/users/get-by-id/${id}`);
    return response.data;
}

export async function checkEmailexists(email) {
    const response = await instance.get(`/api/users/check-email-exists/${email}`);
    return response.data;
}

export async function signIn(email, password) {
    const response = await instance.post(`/api/users/sign-in`, {
        "email": email,
        "password": `{noop}${password}`,
    });
    return response.data;
}

export async function signUp(email, password) {
    const response = await instance.post(`/api/users/sign-up`, {
        "email": email,
        "password": `{noop}${password}`,
        "active": 1,
    });
    return response.data;
}

export async function update(id, email, password, active = 1) {
    const response = await instance.put(`/api/users/update`, {
        "id": id,
        "email": email,
        "password": `{noop}${password}`,
        "active": active,
    });
    return response.data;
}

export async function deleteById(id) {
    const response = await instance.delete(`/api/users/delete/${id}`);
    return response.data;
}