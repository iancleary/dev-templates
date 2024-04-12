{
  description = "A Nix-flake-based Rust development environment";

  # GitHub URLs for the Nix inputs we're using
  inputs = {
    # Simply the greatest package repository on the planet
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    # A set of helper functions for using flakes
    flake-utils.url = "github:numtide/flake-utils";
    # A utility library for working with Rust
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = { self, nixpkgs, flake-utils, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [
          # This overlay adds the "rust-bin" package to nixpkgs
          (import rust-overlay)
        ];
        # System-specific nixpkgs with rust-overlay applied
        pkgs = import nixpkgs {
          inherit system overlays;
          config = { allowUnfree = true; };
        };
        # Use the specific version of the Rust toolchain specified by the toolchain file
        localRust = pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml;

        # cargo subcommands to include in the development environment
        ## cargo-release is not included, use CI/CD instead
        cargoSubCommands = with pkgs; [
          cargo-audit
          cargo-edit
          cargo-watch
        ];

      in {
        devShells = {
          default = pkgs.mkShell {
            # Packages included in the environment
            buildInputs = [ localRust ] ++ cargoSubCommands;

            # Run when the shell is started up
            shellHook = ''
              which_cargo=$(which cargo)
              cargo_version=$(cargo --version)
              echo "cargo version: $which_cargo ($cargo_version)"
            '';
          };
        };
      });
}
