export const authApiConfig = {
  baseUrl: 'http://localhost:3000/v1',
  loginEndpoint: '/auth/login',
  /**
   * Optional clinic UUID for `/booking` when `?clinic=` is omitted.
   * If unset, the app uses `GET /v1/clinic/public` (DEFAULT_CLINIC_ID or first active clinic).
   */
  publicBookingClinicId: undefined as string | undefined,
};
