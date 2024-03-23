# Nix flake templates for easy dev environments

[![built with nix](https://builtwithnix.org/badge.svg)](https://builtwithnix.org)

## Credit and Inspiration

> Credit and inspiration for this repo comes from https://github.com/the-nix-way/dev-templates
>
> These templates are derived, from their work, for our use cases.  We have learned alot!
>
> We also recommend https://determinate.systems/posts/nix-github-actions for continued reading.


## Pre-requisites

### Install direnv

1. Install [nix](https://github.com/DeterminateSystems/nix-installer) 
2. Install [direnv](https://direnv.net)


To initialize (where `${ENV}` is listed in the table below):

## Using as a remote flake

```shell
echo "use flake \"github:iancleary/dev-templates?dir=${ENV}\"" >> .envrc
direnv allow
```

For example, for the [`rust`](./rust) template:

```shell
echo "use flake \"github:iancleary/dev-templates?dir=rust\"" >> .envrc
direnv allow
```

### Pinning the specific version  (Recommended)

If you want to pin the specific version of the flake, you can do so by specifying the `rev` parameter:

```shell
echo "use flake \"github:iancleary/dev-templates?dir=rust&rev=ad6530c93629bb51f8e648840191da1d5b4eff27\"" >> .envrc
direnv allow
```


## Using as a template

Here's an example (for the [`rust`](./rust) template):

```shell
# Initialize in the current project
nix flake init --template github:iancleary/dev-templates#rust

# Create a new project
nix flake new --template github:iancleary/dev-templates#rust ${NEW_PROJECT_DIRECTORY}
```

