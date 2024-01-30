FROM docker.io/rust:alpine as builder

RUN apk update
RUN apk add --no-cache openssl-dev musl-dev

WORKDIR /usr/src/workdir

# Add our source code.
ADD Cargo.toml Cargo.toml

# Cache Dependencies
## https://stackoverflow.com/a/49664709
RUN mkdir src \
    && echo "// dummy file" > src/lib.rs \
    && cargo build \
    && rm src/lib.rs

# Copy our code
ADD src/ src/

# Build our application.
RUN cargo build --release

# Now, we need to build our _real_ Docker container, copying in `using-diesel`.
FROM docker.io/alpine:latest
RUN apk --no-cache add ca-certificates
COPY --from=builder \
    /usr/src/workdir/target/release/rust-app \
    /usr/local/bin/
CMD /usr/local/bin/rust-app
