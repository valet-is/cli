# @valet-is/cli

![npm](https://img.shields.io/npm/v/@valet-is/cli?style=flat-square)
![NPM](https://img.shields.io/npm/l/@valet-is/cli?style=flat-square)

## Getting Started

### Developer Guide

```bash
git clone git@github.com:valet-is/cli.git
cd cli
npm install
```

#### Create a Symlink with `npm link`

Run `npm link` to make local development easier. It'll create a Symlink for the package path. `valet` command will be available in the command-line.

#### Publish the package

```bash
npm login
> Username: <username>
> Password: <password>
> Email: (this IS public) <email>
> Logged in as <username> on https://registry.npmjs.org/.

npm publish --access public
```
