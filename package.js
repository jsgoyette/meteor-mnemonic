Package.describe({
  name: 'mnemonic',
  version: '0.0.1',
  summary: 'wrapper for https://www.npmjs.com/package/mnemonic',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  'mnemonic': '1.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  api.addFiles('mnemonic.js', 'server');

  api.export('Mnemonic');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mnemonic');
  api.addFiles('mnemonic-tests.js');
});
