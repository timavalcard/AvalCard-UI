import { toEnglishDigits } from "./toEnglishDigits";

export const formatAmount = (value) => {
    const english = toEnglishDigits(value).replace(/,/g, '').replace(/\D/g, '');
    return english.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };