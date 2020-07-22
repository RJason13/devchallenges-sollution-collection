module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? 'https://rjason13.github.io/devchallenges-solution-collection/'
      : require('path').join(process.cwd(), "dist") 
}