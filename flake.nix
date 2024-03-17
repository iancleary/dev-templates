{
  description = "Nix flake dev environments";

  outputs = { self }: {
    templates = rec {
      
      graphite = {
        path = ./dev-tools;
        description = "Development tools common to using ";
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
