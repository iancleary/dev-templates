{
  description = "Nix flake dev environments";

  outputs = { self }: {
    templates = rec {
      node = {
        path = ./node;
        description = "Node.js development environment";
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
