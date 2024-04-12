{
  description = "Nix flake dev environments";

  outputs = { self }: {
    templates = {

      graphite = {
        path = ./dev-tools;
        description = "Development tools common to using graphite, git, etc.";
      };

      pnpm = {
        path = ./pnpm;
        description = "Nodejs development environment for only pnpm";
      };

      rust = {
        path = ./rust;
        description = "Rust development environment";
      };
    };
  };
}
