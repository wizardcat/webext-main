export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  NEW_ACCOUNT: '/new-account',
  CREATE_WALLET: '/create-wallet',
  IMPORT_WALLET: '/import-wallet',
  CLAIM_CREDENTIALS: '/claim-credentials',
  // TODO: create pages for it
  TERMS: '/terms',
  // TODO: create pages for it
  PRIVACY: '/privacy',
  ZPASS: '/zpass',
  WALLET: '/wallet',
  RECIPIENTS: '/recipients',
  PROFILE: '/profile',
  PROFILE_GENERAL: '/profile/general',
  PROFILE_AUTHORIZED_APPS: '/profile/authorized-apps',
  PROFILE_FILE_SETTINGS: '/profile/file-settings',
  PROFILE_VIEW_KEY: '/profile/view-key',
  PROFILE_PRIVATE_KEY: '/profile/private-key',
  PROFILE_SEED_PHRASE: '/profile/seed-phrase',
} as const;

export type RouteName = (typeof ROUTES)[keyof typeof ROUTES];
