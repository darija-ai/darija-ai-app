import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { signUp } from "./api";
import { handleError } from "@/shared/lib/utils";

type UserRegister = {
    username: string,
    email: string, 
    password: string, 
}

const useAuth = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();


    const signUpMutation = useMutation({
        mutationFn: (data: UserRegister) => signUp(data),

        onSuccess: () => {
            navigate({to: "/login"})
        },
        onError: (err) => {
            handleError(err)
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ["users"]})
        }
    })

    const logout = () => {
        localStorage.removeItem("access_token")
        navigate({ to: "/login"})
    }

    return {
        signUpMutation, 
        logout
    }
}

export default useAuth;