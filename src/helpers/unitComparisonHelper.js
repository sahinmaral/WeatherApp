import {
  PressureUnit,
  TemperatureUnit,
  WindSpeedUnit,
} from "../enums/UnitType";

const convertTemperature = (desiredTemperatureUnit, temperatureValue) => {
  switch (desiredTemperatureUnit) {
    case TemperatureUnit.Fahrenheit:
      return Math.floor(temperatureValue * 1.8 + 32);
    case TemperatureUnit.Kelvin:
      return Math.floor(temperatureValue + 273.15);
    default:
      return Math.floor(temperatureValue);
  }
};

const convertWindSpeed = (desiredWindSpeedUnit, windSpeedValue) => {
  switch (desiredWindSpeedUnit) {
    case WindSpeedUnit.KilometersPerHour:
      return (windSpeedValue * 3.6).toFixed(2);
    case WindSpeedUnit.MilPerHour:
      return (windSpeedValue * 2.2369362920544).toFixed(2);
    case WindSpeedUnit.FeetPerSecond:
      return (windSpeedValue * 3.2808399).toFixed(2);
    case WindSpeedUnit.Knots:
      return (windSpeedValue * 1.94).toFixed(2);
    default:
      return (windSpeedValue).toFixed(2);
  }

};

const convertPressure = (desiredPressureUnit, pressureValue) => {
  switch (desiredPressureUnit) {
    case PressureUnit.Milibars:
      return (pressureValue).toFixed(2);
    case PressureUnit.StandartAtmosphere:
      return (pressureValue * 0.0009869233).toFixed(2);
    case PressureUnit.MilimetersOfMercury:
      return (pressureValue * 1.33322387415).toFixed(2);
    default:
      return (pressureValue).toFixed(2);
  }
};

export { convertTemperature, convertWindSpeed, convertPressure };
