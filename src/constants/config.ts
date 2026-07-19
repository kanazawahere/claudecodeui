/**
 * Environment Flag: Is Platform
 * Indicates if the app is running in Platform mode (hosted) or OSS mode (self-hosted)
 */
export const IS_PLATFORM = import.meta.env.VITE_IS_PLATFORM === 'true';

/**
 * ATP trusted self-host mode removes the app-level login prompt while retaining
 * OSS/local behavior. It must only be used behind an independently trusted
 * perimeter such as loopback + tailnet-only Tailscale Serve.
 */
export const IS_TRUSTED_SELF_HOST = import.meta.env.VITE_ATP_TRUSTED_SELF_HOST === 'true';

/**
 * For empty shell instances where no project is provided,
 * we use a default project object to ensure the shell can still function.
 * This prevents errors related to missing project data.
 *
 * `projectId` is set to a well-known sentinel ('default') because the empty
 * shell doesn't correspond to any real project row in the database; any API
 * call that routes through this placeholder must tolerate a missing match.
 */
export const DEFAULT_PROJECT_FOR_EMPTY_SHELL = {
  projectId: 'default',
  displayName: 'default',
  fullPath: IS_PLATFORM ? '/workspace' : '',
  path: IS_PLATFORM ? '/workspace' : '',
};