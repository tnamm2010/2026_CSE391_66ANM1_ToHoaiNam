export const validate = {
  required: (value, message = "Không được để trống") => {
    return !value?.toString().trim() ? message : "";
  },

  minLength: (value, min, message) => {
    if (!value?.toString().trim()) return "";
    return value.toString().trim().length < min
      ? message || `Ít nhất ${min} ký tự`
      : "";
  },

  maxLength: (value, max, message) => {
    if (!value?.toString().trim()) return "";
    return value.toString().trim().length > max
      ? message || `Không quá ${max} ký tự`
      : "";
  },

  email: (value, message = "Email không đúng định dạng") => {
    if (!value?.trim()) return "";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : message;
  },

  phoneVN: (
    value,
    message = "Số điện thoại phải có 10 số và bắt đầu bằng 0"
  ) => {
    if (!value?.trim()) return "";
    return /^0\d{9}$/.test(value.trim()) ? "" : message;
  },

  onlyLetters: (value, message = "Chỉ được nhập chữ cái và khoảng trắng") => {
    if (!value?.trim()) return "";
    return /^[a-zA-ZÀ-ỹ\s]+$/.test(value.trim()) ? "" : message;
  },

  onlyNumbers: (value, message = "Chỉ được nhập số") => {
    if (!value?.toString().trim()) return "";
    return /^\d+$/.test(value.toString().trim()) ? "" : message;
  },

  numberRange: (value, min, max, message) => {
    if (!value?.toString().trim()) return "";
    const num = Number(value);
    if (isNaN(num)) return "Giá trị không hợp lệ";
    return num >= min && num <= max
      ? ""
      : message || `Giá trị phải từ ${min} đến ${max}`;
  },

  maxText: (value, max, message) => {
    if (!value) return "";
    return value.length > max ? message || `Tối đa ${max} ký tự` : "";
  },
};

export const validateContactForm = (form) => {
  const errors = {};

  errors.fullName =
    validate.required(form.fullName, "Họ tên không được để trống") ||
    validate.minLength(form.fullName, 2, "Họ tên ít nhất 2 ký tự") ||
    validate.maxLength(form.fullName, 30, "Họ tên không quá 30 ký tự") ||
    validate.onlyLetters(form.fullName, "Họ tên chỉ được chứa chữ cái");

  errors.email =
    validate.required(form.email, "Email không được để trống") ||
    validate.email(form.email);

  errors.phone =
    validate.required(form.phone, "Số điện thoại không được để trống") ||
    validate.phoneVN(form.phone);

  errors.message =
    validate.required(form.message, "Nội dung không được để trống") ||
    validate.maxText(form.message, 300, "Nội dung tối đa 300 ký tự");

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return errors;
};

export const validateSignupForm = (form) => {
  const errors = {};

  errors.firstName =
    validate.required(form.firstName, "First name không được để trống") ||
    validate.minLength(form.firstName, 2, "First name ít nhất 2 ký tự") ||
    validate.maxLength(form.firstName, 30, "First name không quá 30 ký tự") ||
    validate.onlyLetters(form.firstName, "First name chỉ được chứa chữ cái");

  errors.lastName =
    validate.required(form.lastName, "Last name không được để trống") ||
    validate.minLength(form.lastName, 2, "Last name ít nhất 2 ký tự") ||
    validate.maxLength(form.lastName, 30, "Last name không quá 30 ký tự") ||
    validate.onlyLetters(form.lastName, "Last name chỉ được chứa chữ cái");

  errors.email =
    validate.required(form.email, "Email không được để trống") ||
    validate.email(form.email, "Email không đúng định dạng");

  errors.password =
    validate.required(form.password, "Password không được để trống") ||
    validate.minLength(form.password, 6, "Password ít nhất 6 ký tự") ||
    validate.maxLength(form.password, 20, "Password không quá 20 ký tự");

  errors.gender = validate.required(form.gender, "Vui lòng chọn giới tính");

  errors.day = validate.required(form.day, "Vui lòng chọn ngày");
  errors.month = validate.required(form.month, "Vui lòng chọn tháng");
  errors.year = validate.required(form.year, "Vui lòng chọn năm");

  Object.keys(errors).forEach((key) => {
    if (!errors[key]) delete errors[key];
  });

  return errors;
};