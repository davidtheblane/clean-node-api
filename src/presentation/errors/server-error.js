module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('An internal errr')
    this.name = 'ServerError'
  }
}
