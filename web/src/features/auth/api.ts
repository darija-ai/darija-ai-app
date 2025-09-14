
const baseApi = "http://127.0.0.1:3001/api";

type SignUpData = {
    username: string;
    email: string;
    password: string;
}

export const signUp = async (data: SignUpData) => {
    const response = await fetch(`${baseApi}/auth/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
    let errorMessage = 'Signup failed';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {
      errorMessage = response.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  };
  return await response.json(); 
}
