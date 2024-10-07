import { AuthProvider, UserIdentity } from "react-admin";

export const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        const postBody = {
            "strategy": "local",
            "email": username,
            password
        }
        const authUrl = import.meta.env.VITE_AUTH_API_URL || 'http://localhost:3001/'
        const request = new Request(authUrl + 'authentication', {
            method: 'POST',
            body: JSON.stringify(postBody),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        let response: Response | undefined
        try {
            response = await fetch(request)
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            const auth = await response.json()
            localStorage.setItem('auth', JSON.stringify(auth));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            if (response && response.status === 400) {
                const errorBody = (await response.json()) as { message: string }
                if (errorBody.message === 'validation failed')
                    throw new Error('Invalid email or password')
                else
                    throw new Error(errorBody.message)
            } else
                throw new Error('Network error')
        }
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    getIdentity: async () => {
        let userIdentity: UserIdentity = { id: '' }
        const authString = localStorage.getItem('auth')
        if (authString) {
            const auth = JSON.parse(authString)
            userIdentity = {
                id: auth?.id,
                fullName: auth?.fullName,
            }
        }
        return userIdentity
    },
    getPermissions: () => Promise.resolve(''),
};
