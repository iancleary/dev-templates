{
  description = "A Nix-flake-based Node.js development environment";

  # GitHub URLs for the Nix inputs we're using
  inputs = {
    # Simply the greatest package repository on the planet
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    # A set of helper functions for using flakes
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils}:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [
          (final: prev: rec {
            pnpm = prev.nodePackages.pnpm;
          })
        ];
        # System-specific nixpkgs with rust-overlay applied
        pkgs = import nixpkgs {
          inherit system overlays;
        };

        # Fast, disk space efficient package manager
        pnpm = pkgs.nodePackages.pnpm;

      in {
        devShells = {
          default = pkgs.mkShell {
            # Packages included in the environment
            buildInputs = [ pnpm ];

            # Run when the shell is started up
            shellHook = ''
              pnpm_version=$(pnpm --version)
              echo "pnpm version: $pnpm_version"
              export GIT_EDITOR=nano
              pnpm install
              pnpm exec husky install
            '';
          };
        };
      });
}