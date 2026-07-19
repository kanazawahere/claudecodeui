/**
 * Environment Flag: Is Platform
 * Indicates if the app is running in Platform mode (hosted) or OSS mode (self-hosted)
 */
export const IS_PLATFORM = process.env.VITE_IS_PLATFORM === 'true';

// Auth-free OSS/self-host mode for an independently trusted network perimeter.
// Unlike IS_PLATFORM, this does not switch Browser Use or product behavior to hosted mode.
export const IS_TRUSTED_SELF_HOST = process.env.ATP_TRUSTED_SELF_HOST === 'true';
