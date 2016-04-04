// default settings. fis3 release

// Global start
fis.match('*.{js,css}', {
  useHash: true
});

fis.match('::image', {
  useHash: true
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});

// 如果想执行fis3 release直接发布到此目录下，可在配置文件中配置
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: '/Users/mac/zhangbaige/beth/fis3/my-proj/public'
  })
})

// Global end

// default media is `dev`
fis.media('dev')
  .match('*', {
    useHash: false,
    optimizer: null
  });

// extends GLOBAL config
fis.media('production');
