// Fake authentication service that simulates backend API calls

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In real app, this would be hashed
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
  token?: string;
}

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Get users from localStorage
const getUsers = (): User[] => {
  const usersJson = localStorage.getItem("fake_users");
  return usersJson ? JSON.parse(usersJson) : [];
};

// Save users to localStorage
const saveUsers = (users: User[]): void => {
  localStorage.setItem("fake_users", JSON.stringify(users));
};

// Generate a simple token (in real app, use JWT)
const generateToken = (userId: string): string => {
  return `fake_token_${userId}_${Date.now()}`;
};

// Register a new user
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  await delay(800); // Simulate network delay

  // Validation
  if (!name || !email || !password) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  if (password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    };
  }

  const users = getUsers();

  // Check if user already exists
  const existingUser = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return {
      success: false,
      message: "User with this email already exists",
    };
  }

  // Create new user
  const newUser: User = {
    id: `user_${Date.now()}`,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: password, // In real app, hash this
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  // Generate token
  const token = generateToken(newUser.id);
  localStorage.setItem("auth_token", token);
  localStorage.setItem("current_user", JSON.stringify(newUser));

  return {
    success: true,
    message: "Registration successful!",
    user: newUser,
    token,
  };
};

// Login user
export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  await delay(800); // Simulate network delay

  // Validation
  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required",
    };
  }

  // Hardcoded credentials that always work
  const HARDCODED_EMAIL = "example@example.com";
  const HARDCODED_PASSWORD = "123456";

  // Check hardcoded credentials first
  if (email.toLowerCase() === HARDCODED_EMAIL.toLowerCase() && password === HARDCODED_PASSWORD) {
    const hardcodedUser: User = {
      id: "hardcoded_user",
      name: "Example User",
      email: HARDCODED_EMAIL,
      password: HARDCODED_PASSWORD,
      createdAt: new Date().toISOString(),
    };

    // Generate token
    const token = generateToken(hardcodedUser.id);
    localStorage.setItem("auth_token", token);
    localStorage.setItem("current_user", JSON.stringify(hardcodedUser));

    return {
      success: true,
      message: "Login successful!",
      user: hardcodedUser,
      token,
    };
  }

  const users = getUsers();

  // Find user
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  // Generate token
  const token = generateToken(user.id);
  localStorage.setItem("auth_token", token);
  localStorage.setItem("current_user", JSON.stringify(user));

  return {
    success: true,
    message: "Login successful!",
    user,
    token,
  };
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("current_user");
};

// Get current user
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem("current_user");
  const token = localStorage.getItem("auth_token");
  
  if (!userJson || !token) {
    return null;
  }

  return JSON.parse(userJson);
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("auth_token");
};

