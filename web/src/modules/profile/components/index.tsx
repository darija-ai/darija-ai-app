import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/profileApi";

const Profile = () => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                setIsLoading(true);
                const response = await getCurrentUser();
                setUser(response.data)
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An unknown error occurred');
            } finally {
                setIsLoading(false)
            }
        };
        fetchCurrentUser();
    }, [])

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            {user ? (
                <div>
                    <h1>Profile</h1>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
            ) : (
                <div>No user data available</div>
            )}
        </div>
    );
};

export default Profile;