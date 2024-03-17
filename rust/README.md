# Rust dev environment

# Tooling to use with app.graphite.dev, git, and github.com

Open up the provided Nix shell:

```shell
echo "use flake \"github:iancleary/dev-templates?dir=rust\"" >> .envrc
direnv allow
```

Once inside the shell, you can run standard [cargo] commands:

```shell
cargo --help
```

[cargo]: https://crates.io/
