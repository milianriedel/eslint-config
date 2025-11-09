# @ntvr/eslint-config

Netvor's shareable collection of configs for [ESLint].

## Version 3.0.0 - Modern ESLint Flat Config

This package has been completely modernized to use ESLint 9's new flat config format. This is a major version with breaking changes.

### Breaking Changes

- **Flat Config Format**: Now uses ESLint 9's modern flat config format by default
- **ESLint 9 Required**: Requires ESLint 9.39+
- **TypeScript ESLint v8**: Updated to @typescript-eslint v8.46+
- **Modern Plugin System**: All plugins updated to latest versions
- **Entry Point Changed**: Main entry point is now `eslint.config.js`

### Migration Guide

#### For New Projects (Recommended)

Use the modern flat config format:

```javascript
// eslint.config.js
import config from '@ntvr/eslint-config';

export default config;
```

Or with TypeScript support:

```javascript
// eslint.config.js
import config from '@ntvr/eslint-config/typescript.js';

export default config;
```

For Next.js projects:

```javascript
// eslint.config.js  
import config from '@ntvr/eslint-config/next.config.js';

export default config;
```

#### For Legacy Projects

If you need to continue using the legacy format, you can still import the old configuration:

```javascript
// .eslintrc.js (legacy)
module.exports = {
  extends: ['@ntvr/eslint-config/index.js'],
};
```

### Available Configurations

- `eslint.config.js` - Modern flat config (default)
- `next.config.js` - Modern flat config for Next.js
- `typescript-v2.js` - Modern TypeScript configuration
- `index.js` - Legacy format (for backward compatibility)
- `next.js` - Legacy Next.js format
- `typescript.js` - Legacy TypeScript format## Installation

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
