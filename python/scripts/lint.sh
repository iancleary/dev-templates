#!/usr/bin/env bash

set -e
set -x

# remove docker-images/app from lint search space to
# avoid duplicate app module mypy errors
scripts/clean_app.sh

pdm run mypy ./
pdm run black ./ --check
pdm run ruff ./
