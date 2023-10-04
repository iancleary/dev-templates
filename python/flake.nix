{
  description = "A Nix-flake-based Python development environment";

  # GitHub URLs for the Nix inputs we're using
  inputs = {
    # Simply the greatest package repository on the planet
    nixpkgs.url = "github:NixOS/nixpkgs";
    # A set of helper functions for using flakes
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, mach-nix }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        # task runner
        just = pkgs.just;

        # Python 3.11
        python = pkgs.python311;

        # Run python packages in a isolated environment
        pipx = pkgs.python311Packages.pipx;

        # Python tools, as a list
        pythonTools = [ python pipx];
      in {
        devShells = {
          default = pkgs.mkShell {
            # Packages included in the environment
            buildInputs = [ just ] ++ pythonTools;

            # Run when the shell is started up
            shellHook = ''
              ${python}/bin/python --version
              ${python}/bin/python -m venv .venv
              source .venv/bin/activate
              export PIPX_HOME=.venv/pipx
              export PIPX_BIN_DIR=.venv/bin
              echo "pipx $(pipx --version)"
              pipx install pdm
              pipx install pre-commit
              pdm --version
              pdm install
              pre-commit --version
              pre-commit install
            '';

            # https://pypa.github.io/pipx/docs/
            # optional environment variables:
            #   PIPX_HOME             Overrides default pipx location. Virtual Environments
            #                         will be installed to $PIPX_HOME/venvs.
            #   PIPX_BIN_DIR          Overrides location of app installations. Apps are
            #                         symlinked or copied here.
            #
          };
        };
      });
}
