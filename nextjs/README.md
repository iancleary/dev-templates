# Node.js dev environment

Open up the provided Nix shell:

```shell
nix develop --ignore-environment
```

Once inside the shell, you can run standard [node] and [pnpm] commands:

```shell
pnpm install
```

To use the Node.js environment without checking out this repo:

```shell
nix flake init --template github:iancleary/dev-templates#node
```

[node]: https://nodejs.org
[pnpm]: https://pnpm.io
