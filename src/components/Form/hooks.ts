import { useState } from 'react';
type ErrorObject = Record<string, string>;


export const useError = () => {
  const [errors, setErrors] = useState<ErrorObject>({});

  const showError = (field: string, message: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  const clearErrors = () => {
    setErrors({});
  }

  const clearError = (field: string) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors } as any;
      delete updatedErrors[field];
      return updatedErrors;
    });
  };

  return {
    errors,
    showError,
    clearError,
    clearErrors,
  };
}
