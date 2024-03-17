# Node.js dev environment

Open up the provided Nix shell:

```shell
echo "use flake \"github:iancleary/dev-templates?dir=pnpm\"" >> .envrc
direnv allow
```

Once inside the shell, you can run standard [pnpm] commands:

```shell
pnpm install
```

```shell
pnpm exec husky install
```

> Only allow pnpm to be used in the project by adding the following to the `package.json`:

```json
 "scripts": {
    "preinstall": "npx only-allow pnpm"
  },
```

[pnpm]: https://pnpm.io
