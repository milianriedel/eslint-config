# @ntvr/eslint-config

Netvor's shareable collection of configs for [ESLint].

## Version 2.0.0 - ESLint 9 Support

This package has been updated to support ESLint 9 with the latest plugin versions. This is a major version bump due to potential breaking changes.

### Breaking Changes

- **ESLint 9 Support**: Updated to ESLint 9.39+
- **TypeScript ESLint**: Updated to v8.46+
- **React Hooks**: Updated plugin versions
- **Next.js Config**: Updated to use newer eslint-config-next versions

### ESLint 9 Flat Config

ESLint 9 uses the new flat config format by default. While this package still provides the legacy `.eslintrc` format for compatibility, we recommend eventually migrating to the flat config format.

#### Legacy Format (Recommended for now)

For existing projects, continue using the legacy format by setting the environment variable:

```bash
ESLINT_USE_FLAT_CONFIG=false eslint .
```

Or in your `package.json`:

```json
{
  "scripts": {
    "lint": "ESLINT_USE_FLAT_CONFIG=false eslint ."
  }
}
```

#### Flat Config Format (Future)

For new projects using ESLint 9's new flat config, you can use `eslint.config.js`. Migration guidance will be provided in future versions.

## Installation

Install custom config:

```bash
yarn add --dev @ntvr/eslint-config
```

Create a config file named `.eslintrc.js`:

## Basic Usage

Apply the config in your Eslint config:

```javascript
module.exports = {
	extends: ['@ntvr/eslint-config/typescript'],
};
```

To see the rules that this config uses, please read the
[main config itself](./.eslintrc.js).

### Optional: Based on the project

```javascript
module.exports = {
	extends: [
		'@ntvr/eslint-config/javascript', 
		'@ntvr/eslint-config/react', 
		'@ntvr/eslint-config/typescript', 
		'@ntvr/eslint-config/next', 
	],
};
```

[Eslint]: https://github.com/eslint/eslint
[Eslint config]: https://github.com/ntvr/eslint-config
