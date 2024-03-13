// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('error!');
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */

export function reportOverheating(temperature) {
  if (!temperature) {
    throw new ArgumentError();
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature);
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  const { check, alertDeadSensor, alertOverheating, shutdown } = actions;
  try {
    check();
  } catch (err) {
    if (err instanceof ArgumentError) {
      alertDeadSensor();
    } else if (err instanceof OverheatingError) {
      const {temperature} = err;
      if (temperature > 600) {
        shutdown();
      } else {
        alertOverheating();
      }
    } else {
      throw err;
    }
  }
}
