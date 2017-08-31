/**
 * @apiDefine Owner Owner access only
 * Only the author of this asset can read it, a token from the author is required.
 */

/** @apiDefine Public No token is required to access this asset */

/** @apiDefine Private A token is required to access this asset */

/** @apiDefine Mixed The response of this asset varies if a token is used or not */

/**
 * @apiDefine AppKey
 * @apiHeader {String} X-App-Key Api client app key.
 */

/**
 * @apiDefine Token
 * @apiHeader {String} X-Auth-Token The user token.
 */