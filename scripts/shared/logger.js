const { format, createLogger, transports } = require('winston');
const { MESSAGE, SPLAT } = require('triple-beam');

const loggerMessageFormat = format((info) => {
  const result = info;

  if (Array.isArray(info[SPLAT])) {
    if (info[SPLAT][0] instanceof Error) {
      result.message = `${info.message}\n${info[SPLAT][0]}`;
    } else if (typeof info[SPLAT][0] !== 'object') {
      result.message = `${info.message}:${info[SPLAT][0]}`;
    }
  } else if (info instanceof Error) {
    result.message = info.stack;
  }

  return result;
});

const loggerLogFormat = format((info) => {
  const result = info;
  const data = JSON.stringify(
    {
      ...info,
      level: undefined,
      message: undefined,
      splat: undefined,
    },
    null,
    2,
  );

  const padding = (info.padding && info.padding[info.level]) || '';

  result[MESSAGE] = `[PID: ${process.pid}] ${info.level}:${padding}${info.message}`;

  if (data !== '{}') {
    result[MESSAGE] = `${info[MESSAGE]} ${data}`;
  }

  return result;
});

module.exports = createLogger({
  level: 'debug',
  format: format.combine(
    loggerMessageFormat(),
    format.align(),
    format.colorize(),
    loggerLogFormat(),
  ),
  exitOnError: false,
  transports: [
    new transports.Console(),
  ],
});
