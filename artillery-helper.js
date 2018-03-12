//Import all graphql queries

module.exports = {
  getPlaylist: (requestParams, context, ee, next) => {
    requestParams.body = 'Imported graphql query'
    return next(); 
  }
};
