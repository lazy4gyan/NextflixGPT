// assets
export const LOGO = "/NETFLIX_LOGO.png";
export const BACKGROUND_IMAGE = "/Movies-Wallpaper.jpg";
export const PROFILE_AVATAR_IMAGE = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"

// validation regex pattern
export const EMAIL_REGEX_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEX_PATTERN =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

// error messages
export const EMAIL_ERROR_MESSAGE = "Email Id is not valid!";
export const PASSWORD_ERROR_MESSAGE = "Password is not valid!";

// tmdb authorization option
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN}`
    }
}

export const IMG_CDN = "https://image.tmdb.org/t/p/original/"