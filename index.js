const execSync = require('child_process').execSync

module.exports = function () {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}
