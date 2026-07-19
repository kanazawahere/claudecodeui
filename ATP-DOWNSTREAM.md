# ATP downstream CloudCLI

This branch is the ATP production downstream of CloudCLI UI v1.36.3, based on
upstream commit `27eaf0146a46aa8a55178f3d394360ff7465420f`.

## Downstream features

### ATP OpenCode database path

Set an absolute path:

```bash
OPENCODE_DB_PATH=$HOME/.local/share/opencode/opencode-atp-patches.db
```

The override applies consistently to initial session reads, the watcher root and
filter, and incremental synchronization. If unset, upstream behavior remains
`~/.local/share/opencode/opencode.db`.

### Trusted self-host mode (no login)

Build the frontend with:

```bash
VITE_ATP_TRUSTED_SELF_HOST=true npm run build:client
```

Run the backend with:

```bash
ATP_TRUSTED_SELF_HOST=true npm run server
```

This bypasses CloudCLI's app-level password/JWT checks while retaining OSS/local
product behavior. It is intentionally narrower than upstream `VITE_IS_PLATFORM`.

**Security boundary:** use this mode only when the listener is loopback-only and an
independently trusted proxy/perimeter controls access. ATP production binds
`127.0.0.1` and uses tailnet-only Tailscale Serve. Every peer that can reach this
surface has full CloudCLI access to shell, Git, files, providers, and coding agents.

## License and source

CloudCLI remains AGPL-3.0-or-later with upstream Section 7 terms. See `LICENSE`
and `NOTICE`. This public branch is the corresponding source for ATP's modified
network deployment.
