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

        just = pkgs.just;
        python = pkgs.python311;
        # pip = pkgs.python311Packages.pip;
        # virtualenv = pkgs.python311Packages.virtualenv;
        pipx = pkgs.python311Packages.pipx;

        pythonTools = [pipx];
      in {
        devShells = {
          default = pkgs.mkShell {
            # Packages included in the environment
            buildInputs = [ python just ] ++ pythonTools;

            # Run when the shell is started up
            shellHook = ''
              ${python}/bin/python --version
              ${python}/bin/python -m venv .venv
              source .venv/bin/activate
              export PIPX_HOME=.venv/pipx
              export PIPX_BIN_DIR=.venv/bin
              echo "pipx $(pipx --version)"
              pipx install pdm
              pdm --version
              pdm install
            '';
          };
        };
      });
}
