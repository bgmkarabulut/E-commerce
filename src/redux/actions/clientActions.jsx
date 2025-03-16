import axios from "axios";
import md5 from "md5";
// Action Types
export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setRoles = (roles) => ({ type: SET_ROLES, payload: roles });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

// Thunk Action to Fetch Roles
export const fetchRoles = () => async (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length > 0) return;

  try {
    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/roles"
    );
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://workintech-fe-ecommerce.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    console.log("Response Status:", response.status); // Durumu logla
    const data = await response.json();
    console.log("API Response Data:", data); // Yanıtı logla

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    // ✅ Gravatar için email’i md5 formatına çevir
    const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
      credentials.email.trim().toLowerCase()
    )}?d=identicon`;
    const userData = { ...data, avatar: gravatarUrl };

    dispatch({ type: "LOGIN_SUCCESS", payload: userData });

    // Remember Me seçiliyse token'ı kaydet
    localStorage.setItem("token", data.token);

    return userData;
  } catch (error) {
    console.error("Login Error:", error);
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    throw error;
  }
};
