import { baseApi } from "@/const/baseApi";

// const token = localStorage.getItem("auth-token")

export const signUp = async (username: string, email: string, password: string) => {
  const response = await fetch(`${baseApi}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}` later
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    credentials: 'include',
  })

  if (!response.ok) {
    let errorMessage = 'Signup failed';
    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch {
      errorMessage = response.statusText || errorMessage;
    }
    throw new Error(errorMessage);
  }

  return await response.json();
}
export const signIn = async (email: string, password: string) => {
  const response = await fetch(`${baseApi}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
    credentials: "include",
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
  }

  const data = await response.json();
  if (data.token && data.user) {
    localStorage.setItem("auth-token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  }
  return data;
};

export const signOut = async () => {
  try {
    await fetch(`${baseApi}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user");
  }
};
