export const setUserSession = (userData) => {
    const expiryTime = new Date().getTime() + (30 * 60 * 1000); // 30 minutes from now
    const sessionData = {
        ...userData,
        expiryTime
    };
    localStorage.setItem('userSession', JSON.stringify(sessionData));
};

export const getUserSession = () => {
    const sessionData = localStorage.getItem('userSession');
    if (!sessionData) return null;

    const session = JSON.parse(sessionData);
    const currentTime = new Date().getTime();

    if (currentTime > session.expiryTime) {
        localStorage.removeItem('userSession');
        return null;
    }

    // Extend session by 30 minutes if user is active
    setUserSession(session);
    return session;
};

export const clearUserSession = () => {
    localStorage.removeItem('userSession');
}; 