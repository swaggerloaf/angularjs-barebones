let logIn = (username, password) => {
    if(username !== 'admin' || password !== 'radical') {

        console.log('not good');
    }
};

const FRED = 'Where is Brian';

export { logIn, FRED };