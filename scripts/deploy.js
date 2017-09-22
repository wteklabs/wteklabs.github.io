const ghpages = require('gh-pages');
const path = require('path');
const fs = require('fs');

const HOST_NAME = 'wteklabs.com';
const BUILD_DIR = path.join(__dirname, '../build');

fs.writeFileSync(path.join(BUILD_DIR, 'CNAME'), HOST_NAME, { flag: 'w' }, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('CNAME file is created successfully');
});

const ghpagesOptions = {
  branch: 'master',
  remote: 'origin',
  message: 'Site content build successfully'
};

ghpages.clean();

console.log('\n==> Deploying build to host repo\n');

ghpages.publish(BUILD_DIR, ghpagesOptions, function (err) {
  if (err) {
    return console.log(err);
  }

  console.log('==> Website is successfully hosted on http://' + HOST_NAME);
});
