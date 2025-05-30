export const useFormat = () => {
  const formatAmount = (
    amount: number | string,
    currency: string = "USD",
    locale: string = "en-US"
  ): string => {
    let numericAmount =
      typeof amount === "number" ? amount : parseFloat(amount);
    if (isNaN(numericAmount)) return "";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericAmount);
  };

  return { formatAmount };
};
