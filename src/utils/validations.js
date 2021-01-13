const validateEmail = (value) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  if (!pattern.test(value)) {
    return { valid: false, error: "Wrong email format." };
  }
  return { valid: true, error: null };
};

const validateName = (value) => {
  const pattern = new RegExp(/^[a-zA-Z]*$/);
  if (!pattern.test(value)) {
    return { valid: false, error: "Name should only contain alphabets." };
  }
  return { valid: true, error: null };
};

const validatePassword = (value) => {
  const length = value.length;
  if (length < 8) {
    return { valid: false, error: "Minimum length of Password should be 8." };
  }
  return { valid: true, error: null };
};

const validateConfirmPassword = (pass, value) => {
  if (pass !== value) {
    return { valid: false, error: "Password does not match." };
  }
  return { valid: true, error: null };
};

const validateYear = (value) => {
  const pattern = new RegExp(/^\d+$/);
  if (!pattern.test(value)) {
    return { valid: false, error: "Year should be a number." };
  }

  if (value.length !== 4) {
    return { valid: false, error: "Non valid Year" };
  }

  return { valid: true, error: null };
};

export {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateYear,
};
