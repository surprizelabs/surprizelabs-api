const config = require("../config");

module.exports = class LogMsg {

  constructor (filename, functionName, correlationId, extra) {
    this.filenameValue = filename || null;
    this.functionNameValue = functionName || null;
    this.correlationIdValue = correlationId || null;
    this.extraValue = extra || null;
    this.serviceName = config.serviceName;
  }

  get filename() {
    return this.filenameValue;
  }
  set filename(x) {
    this.filenameValue = x;
  }

  get functionName() {
    return this.functionNameValue;
  }
  set functionName(x) {
    this.functionNameValue = x;
  }

  get correlationId() {
    return this.correlationIdValue;
  }
  set correlationId(x) {
    this.correlationIdValue = x;
  }

  get extra() {
    return this.extraValue;
  }
  set extra(x) {
    this.extraValue = x;
  }

  toJSON() {
    return {
      serviceName: this.serviceName,
      filename: this.filenameValue,
      functionName: this.functionNameValue,
      correlationId: this.correlationIdValue,
      extra: this.extraValue,
    }
  }
};
