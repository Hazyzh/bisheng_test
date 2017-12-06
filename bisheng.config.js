module.exports = {
  source: './posts',
  output: './dist',
  theme: './bisheng-theme-one',
  plugins: ['bisheng-plugin-toc?maxDepth=2', 'bisheng-plugin-react?lang=jsx', 'bisheng-plugin-description'],
  port: 8000
}
