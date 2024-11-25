// postcss 환경설정 node.js => common.js 외부적인 서버작업
// const autoprefixer =  require('autoprefixer') // 변수 = 모듈

module.exports = {
  plugins : [
    require('autoprefixer')
  ]
}

// ES 내부적인

// import autoprefixer from 'autoprefixer'
// export {
//   plugins : [
//     autoprefixer
//   ]
// }