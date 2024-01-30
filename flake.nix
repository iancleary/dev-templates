{
  description = "Nix flake dev environments";

  outputs = { self }: {
    templates = rec {
      pnpm = {
        path = ./pnpm;
        description = "Nodejs development environment for only pnpm";
      };

      python = {
        path = ./python;
        description = "Python development environment";
      };

      rust = {
        path = ./rust;
        description = "Rust development environment";
      };
    };
  };
}
