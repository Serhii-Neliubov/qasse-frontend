export function getCsrfToken(name: string) {
    if (!document.cookie || document.cookie === '') {
        return console.error('No CSRF token found');
    }

    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const targetCookie = cookies.find(cookie => cookie.startsWith(name + '='));

    if (!targetCookie) {
        return console.error('No CSRF token found');
    }

    return decodeURIComponent(targetCookie.substring(name.length + 1));
}
