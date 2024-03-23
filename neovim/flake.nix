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

        pkgs = import nixpkgs {
          inherit system;
        };

        # Vim text editor fork focues on extensibility and agility
        neovim = pkgs.neovim;

      in {
        devShells = {
          default = pkgs.mkShell {
            # Packages included in the environment
            buildInputs = [ neovim ];

            # Run when the shell is started up
            shellHook = ''
              nvim_version=$(nvim --version)
              echo "nvim version: $nvim_version"
            '';
          };
        };
      });
}
