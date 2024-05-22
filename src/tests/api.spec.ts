import { expect, test } from '@playwright/test';

var userID: number;

test('api GET @api', async({request}) => {

    const response = await request.get('https://reqres.in/api/users');
    var respJson = await response.json();
    console.log(respJson);
    expect(response.status()).toBe(200);
    expect(respJson.data[0].last_name).toBe('Bluth');
});

test('post request @api', async function({request}) {
    const user = {
        'name': "morpheus",
        'job': "leader"
    };
    const response = await request.post('https://reqres.in/api/users', {
        data: user,
        headers: {"ACCEPT":"application/json"}
    });
    var respJson = await response.json();
    console.log(respJson);
    expect(response.status()).toBe(201);
    expect(respJson.job).toBe(`${user.job}`);
    expect(respJson.name).toBe(user.name);
    userID = respJson.id;

});

test('put request @api', async ({request}) => {
    const user = {
        'name': "playfufel",
        'job': "bratok"
    };
    const response = await request.put('https://reqres.in/api/users/'+ userID, {
        data: user,
        headers: {"ACCEPT":"application/json"}
    });
    var respJson = await response.json();
    console.log(respJson);
    expect(response.status()).toBe(200);
    expect(respJson.job).toBe(`${user.job}`);
    expect(respJson.name).toBe(user.name);

});

test('delete request @api', async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users/'+ userID);
    
    expect(response.status()).toBe(204);

    const resp = await request.get('https://reqres.in/api/users/'+ userID);

    console.log(resp.json());
});