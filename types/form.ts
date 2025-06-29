// types/form.ts

export interface ShippingAddressFormState {
  success?: boolean;
  // Shipping
  email?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  apartment?: string;
  address?: string;
  state?: string;
  city?: string;
  postalCode?: string;
  phoneCode?: string;
  phoneNumber?: string;
  sameAsShippingAddress?: string;
  // Billing
  billingFirstName?: string;
  billingLastName?: string;
  billingAddress?: string;
  billingCity?: string;
  billingState?: string;
  billingPostalCode?: string;
  billingCountry?: string;
}
