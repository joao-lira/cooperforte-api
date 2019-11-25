const moment = require('moment')

class Util {
  static formatDate(date) {
    let dateFomart = moment(moment(date, 'DD/MM/YYYY')).format('YYYY-MM-DD')
    return dateFomart
  }

  static dateTime(date) {
    let dateTimeFomat = moment(moment(date, 'DD/MM/YYYY HH:mm:ss')).format(
      'YYYY-MM-DD HH:mm:ss'
    )
    return dateTimeFomat
  }

  static removePontuations(str) {
    str = String(str).replace(/[^\d]+/g, '')
    return str
  }

  static formatMoney(str) {
    let testStr = str.includes(',')
    if (testStr) {
      str = str.replace('.', '').replace(',', '.')
    } else {
      str = str.replace(',', '').replace(',', '.')
    }
    return str
  }

  static validateRequiredField(str) {
    let isValid = str !== undefined ? true : false
    isValid = isValid && str.replace(/\s/g, '') != '' ? true : false
    return isValid
  }

  static validateRequiredFieldObject(object) {
    let isValid = !!object.length > 0
    return isValid
  }

  static params(paramValue) {
    return paramValue !== '' &&
      paramValue !== undefined &&
      paramValue !== 'undefined' &&
      paramValue !== null &&
      paramValue !== 'null'
      ? paramValue
      : ''
  }

  static defaultResponse(res, error, objectName) {
    return res.status(200).json(
      this.jaySon(false, 'Ooops!', 'Aconteceu algum problema. Por favor, tente novamente.', error, error.code, objectName, [])
    )
  }

  static jaySon(
    success = false,
    title = '',
    description = '',
    errors = null,
    errorCode = 0,
    objectName,
    objectValues
  ) {
    let res = {
      success: success,
      message: {
        title: `${title}`,
        description: `${description}`
      },
      errors: `${errors}`,
      error_code: `${errorCode}`,
      data: {
        [objectName]: objectValues
      }
    }
    return res
  }
}

module.exports = Util
