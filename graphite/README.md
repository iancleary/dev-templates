# Tooling to use with app.graphite.dev, git, and github.com

Open up the provided Nix shell:

```shell
echo "use flake \"github:iancleary/dev-templates?dir=graphite\"" >> .envrc
direnv allow
```

Once inside the shell, you can run standard [gt] commands:

```shell
gt init
gt create
```

[gt]: https://graphite.dev
