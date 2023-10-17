export { default } from 'next-auth/middleware';

export const config = { matcher: ['/', '/set_configurations', '/parkings', '/reports'] };