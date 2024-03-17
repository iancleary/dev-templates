{
  description = "A Nix-flake-based graphite.dev development environment";

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
        # System-specific nixpkgs with unfree packages allowed
        pkgs = import nixpkgs {
          inherit system;
          config = { allowUnfree = true; };
        };

        # Other utilities we want to include in the development environment
        tools = with pkgs; [ git graphite-cli just nano openssh ];
      in {
        devShells = {
          default = pkgs.mkShell {
            # Packages included in the environment
            buildInputs = [ tools ];

            # Run when the shell is started up
            shellHook = ''
              export GIT_EDITOR=nano
              gt_version=$(which gt)
              echo "gt version: $gt_version"
              git_version=$(which git)
              echo "git version: $git_version"
              just_version=$(which just)
              echo "just version: $just_version"
              ssh_version=$(which ssh)
              echo "ssh version: $ssh_version"
              nano_version=$(which nano)
              echo "nano version: $nano_version"
            '';
          };
        };
      });
}