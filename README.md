# @ntvr/eslint-config

Netvor's shareable collection of configs for [ESLint] - **Modern ESLint 9 Flat Config**

## Version 3.1.0 - React 19 Ready ✨

This package has been completely modernized for ESLint 9, removing all legacy ESLint 8 components and using the new flat config format throughout.

### What's New

- **⚛️ React 19 Optimized**: Full support for React 19 features and best practices
- **🚀 ESLint 9.39+**: Full support for ESLint 9's flat config system
- **📦 Modern Plugins**: All plugins updated to latest versions
- **🎯 TypeScript v8**: @typescript-eslint v8.46+ with full compatibility
- **🔧 Zero Deprecated Rules**: Removed all deprecated formatting and React rules
- **⚡ Zero Legacy**: No more .eslintrc.js files - pure flat config
- **🎨 Optional Styling**: Formatting rules available via @stylistic plugin

## Installation

```bash
# NPM
npm install --save-dev @ntvr/eslint-config

# Yarn
yarn add --dev @ntvr/eslint-config
```

## Usage

### Modern Flat Config (Recommended)

Create `eslint.config.js` in your project root:

```javascript
// eslint.config.js
const config = require('@ntvr/eslint-config');

module.exports = config;
```

### Project-Specific Configurations

#### React Projects
```javascript
// eslint.config.js
const config = require('@ntvr/eslint-config/react.js');

module.exports = config;
```

#### TypeScript Projects
```javascript
// eslint.config.js
const config = require('@ntvr/eslint-config/typescript.js');

module.exports = config;
```

#### Next.js Projects
```javascript
// eslint.config.js
const config = require('@ntvr/eslint-config/next.js');

module.exports = config;
```

#### JavaScript Only
```javascript
// eslint.config.js
const config = require('@ntvr/eslint-config/javascript.js');

module.exports = config;
```

## Optional Formatting Rules

ESLint 9 and @typescript-eslint v8+ removed formatting rules like `indent`, `max-len`, and `member-delimiter-style`. If you need them:

1. Install the stylistic plugin:
```bash
yarn add --dev @stylistic/eslint-plugin
```

2. Add to your config:
```javascript
// eslint.config.js
const baseConfig = require('@ntvr/eslint-config');
const stylisticConfig = require('@ntvr/eslint-config/stylistic.js');

module.exports = [
  ...baseConfig,
  stylisticConfig,
];
```

## Migration from v2.x

### Breaking Changes
- **ESLint 9 Required**: Must upgrade to ESLint 9.39+
- **Flat Config Only**: No more .eslintrc.js support
- **Updated Dependencies**: All plugins updated to latest versions
- **Removed Formatting Rules**: Use @stylistic plugin if needed

### Migration Steps

1. **Update ESLint**: `yarn add --dev eslint@^9.39.0`
2. **Remove .eslintrc.js**: Delete legacy config files
3. **Create eslint.config.js**: Use flat config format
4. **Update Scripts**: Ensure package.json uses ESLint 9 commands

## Available Configurations

| File | Purpose |
|------|---------|
| `eslint.config.js` | Main flat config (React + TypeScript optional) |
| `javascript.js` | JavaScript-only projects |
| `react.js` | React projects |
| `typescript.js` | TypeScript projects |
| `next.js` | Next.js projects |
| `stylistic.js` | Optional formatting rules |
| `index.js` | Alias to main config |

## Requirements

- **ESLint**: ^9.39.0
- **Node.js**: ^18.18.0 || ^20.9.0 || >=21.1.0
- **TypeScript**: >=4.8.0 (optional)

## Included Plugins

- `@typescript-eslint/eslint-plugin@^8.46.0`
- `eslint-plugin-react@^7.37.0`
- `eslint-plugin-react-hooks@^5.0.0`
- `eslint-plugin-import@^2.32.0`
- `eslint-plugin-jsx-a11y@^6.10.0`

[ESLint]: https://eslint.org/
[Flat Config]: https://eslint.org/docs/latest/use/configure/configuration-files-new
