// Function to determine if the device is mobile
function isMobile() {
    const platform = window.navigator.platform;
    const userAgent = window.navigator.userAgent;
    const mobileKeywords = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    
    // Check if the platform contains any of the mobile keywords
    if (mobileKeywords.some(keyword => userAgent.includes(keyword))) return true;

    // Check if the platform contains 'Mobile' (some devices append this to the platform)
    if (platform.includes('Mobile')) return true;

    return false;
}
export default isMobile; // Exporting the function
