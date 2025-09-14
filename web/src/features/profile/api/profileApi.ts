const baseApi = import.meta.env.VITE_API_URL;
const token = localStorage.getItem('auth-token')
export const getCurrentUser = async () => {
    try {
        const response = await fetch(`${baseApi}/auth/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        const user = await response.json()
        return user;
    } catch (error) {
        console.error(error);
    }
};