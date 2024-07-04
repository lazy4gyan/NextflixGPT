import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX_PATTERN,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX_PATTERN,
} from "./constants";

export interface ValidateFormData {
  email: string;
  password: string;
}

export interface ErrorMessage {
  email: string;
  passowrd: string;
  authenticationError?:string;
}

export const validateData = (formData: ValidateFormData): ErrorMessage => {
  const isEmailValidated = EMAIL_REGEX_PATTERN.test(formData.email);
  const isPasswordValidated = PASSWORD_REGEX_PATTERN.test(formData.password);

  const errorMessage = {
    email: "",
    passowrd: "",
  };

  if (!isEmailValidated) {
    errorMessage.email = EMAIL_ERROR_MESSAGE;
  }

  if (!isPasswordValidated) {
    errorMessage.passowrd = PASSWORD_ERROR_MESSAGE;
  }

  return errorMessage;
};
