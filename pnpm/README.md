# Node.js dev environment

Open up the provided Nix shell:

```shell
nix develop --ignore-environment
```

Once inside the shell, you can run standard [pnpm] commands:

```shell
pnpm install
```

To use the [pnpm] environment without checking out this repo:

```shell
nix flake init --template github:iancleary/dev-templates#pnpm
```

[pnpm]: https://pnpm.io
