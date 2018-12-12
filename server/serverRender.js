const fs = require('fs');
const vueServerRender = require('vue-server-renderer');
const renderer = vueServerRender.createRenderer({
    template: fs.readFileSync(',.html/template.html','utf-8')
});
