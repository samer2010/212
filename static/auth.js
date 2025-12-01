// Simple authentication simulation using localStorage
const AUTH_STORAGE_KEY = 'samerai_users';
const CURRENT_USER_KEY = 'samerai_current_user';

// Initialize storage if not exists
function initAuth() {
    if (!localStorage.getItem(AUTH_STORAGE_KEY)) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify([]));
    }
}

// Register a new user
function registerUser(name, email, password) {
    initAuth();
    const users = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    // Check if email already exists
    if (users.some(u => u.email === email)) {
        return { success: false, message: 'البريد الإلكتروني مسجل مسبقاً' };
    }
    const newUser = {
        id: Date.now(),
        name,
        email,
        password, // In a real app, never store plain passwords
        bio: 'مستخدم جديد في منصة Samer.AI',
        phone: '',
        location: '',
        avatar: null,
        createdAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
    // Auto login after registration
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    return { success: true, user: newUser };
}

// Login user
function loginUser(email, password) {
    initAuth();
    const users = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
    }
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return { success: true, user };
}

// Get current logged-in user
function getCurrentUser() {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
}

// Update user profile
function updateUser(updates) {
    const current = getCurrentUser();
    if (!current) return { success: false, message: 'لم تقم بتسجيل الدخول' };
    initAuth();
    let users = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
    const index = users.findIndex(u => u.id === current.id);
    if (index === -1) return { success: false, message: 'المستخدم غير موجود' };
    // Merge updates
    users[index] = { ...users[index], ...updates };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(users));
    // Update current user
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[index]));
    return { success: true, user: users[index] };
}

// Logout
function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
}

// Check if user is logged in
function isLoggedIn() {
    return getCurrentUser() !== null;
}

// Export for use in browser
window.auth = {
    registerUser,
    loginUser,
    getCurrentUser,
    updateUser,
    logout,
    isLoggedIn
};