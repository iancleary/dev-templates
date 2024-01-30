# Nix flake templates for easy dev environments

[![built with nix](https://builtwithnix.org/badge.svg)](https://builtwithnix.org)

## Credit and Inspiration

> Credit and inspiration for this repo comes from https://github.com/the-nix-way/dev-templates
>
> These templates are derived, from their work, for our use cases.  We have learned alot!
>
> We also recommend https://determinate.systems/posts/nix-github-actions for continued reading.

## Getting Started

To initialize (where `${ENV}` is listed in the table below):

```shell
nix flake init --template github:iancleary/dev-templates#${ENV}
```

Here's an example (for the [`rust`](./rust) template):

```shell
# Initialize in the current project
nix flake init --template github:iancleary/dev-templates#rust

# Create a new project
nix flake new --template github:iancleary/dev-templates#rust ${NEW_PROJECT_DIRECTORY}
```

## How to use the templates

Once your preferred template has been initialized, you can use the provided shell in two ways:

1. If you have [`nix-direnv`][nix-direnv] installed, you can initialize the environment by running `direnv allow`.
2. If you don't have `nix-direnv` installed, you can run `nix develop` to open up the Nix-defined shell.

## Available templates

| Language/framework/tool | Template              |
| :---------------------- | :-------------------- |
| [Node.js][node]         | [`pnpm`](./pnpm/)     |
| [Python]                | [`python`](./python/) |
| [Rust]                  | [`rust`](./rust/)     |

## Template contents

The sections below list what each template includes. In all cases, you're free to add and remove packages as you see fit; the templates are just boilerplate.

### [`pnpm`](./pnpm/)

- [Node.js][node] 18.16.1
- [npm] 9.5.1
- [pnpm] 8.6.6


### [`python`](./python/)

- [Python] 3.11.4
- [pip] 23.0.1
- [Virtualenv] 20.19.0

### [`rust`](./rust/)

- [Rust], including [cargo], [Clippy], and the other standard tools. The Rust version is determined as follows, in order:

  - From the `rust-toolchain.toml` file if present
  - From the `rust-toolchain` file if present
  - Version 1.73.0 if neither is present

- [rust-analyzer] 2023-07-10
- [cargo-audit] 0.17.0
- [cargo-deny] 0.12.1

## Code organization

All of the templates have only the root [flake](./flake.nix) as a flake input. That root flake provides a common revision of [Nixpkgs] and [`flake-utils`][flake-utils] to all the templates.

[cargo]: https://doc.rust-lang.org/cargo
[cargo-audit]: https://crates.io/crates/cargo-audit
[cargo-deny]: https://crates.io/crates/cargo-deny
[clippy]: https://github.com/rust-lang/rust-clippy
[flake-utils]: https://github.com/numtide/flake-utils
[nix-direnv]: https://github.com/nix-community/nix-direnv
[nixpkgs]: https://github.com/NixOS/nixpkgs
[node]: https://nodejs.org
[node2nix]: https://github.com/svanderburg/node2nix
[npm]: https://npmjs.org
[pip]: https://pypi.org/project/pip
[pnpm]: https://pnpm.io
[python]: https://python.org
[rust]: https://rust-lang.org
[rust-analyzer]: https://rust-analyzer.github.io
[virtualenv]: https://pypi.org/project/virtualenv
