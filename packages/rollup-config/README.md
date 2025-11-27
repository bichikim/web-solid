# rollup-config

Rollup configuration package for building Solid.js TSX libraries.

## Why Rollup?

This package exists because when building Solid.js TSX code as libraries, Rollup is the only viable build method. Unlike Vite, which is primarily designed for application development, Rollup provides the necessary configuration and plugin ecosystem (such as `rollup-preset-solid`) required for properly bundling Solid.js components as distributable libraries.

For this reason, we created a dedicated Rollup configuration package instead of using the existing `vite-config` package.
