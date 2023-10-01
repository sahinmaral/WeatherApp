import { createSlice } from "@reduxjs/toolkit";
import {
  PressureUnit,
  TemperatureUnit,
  WindSpeedUnit,
} from "../../enums/UnitType";
import Language from "../../enums/LanguageType";

const initialState = {
  unit: {
    temperature: TemperatureUnit.Celcius,
    windSpeed: WindSpeedUnit.MetersPerSecond,
    pressure: PressureUnit.StandartAtmosphere,
  },
  language: Language.Turkish,
};

export const unitSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    updateTemperatureUnit: (state, action) => {
      state.unit.temperature = action.payload;
    },
    updateWindSpeedUnit: (state, action) => {
      state.unit.windSpeed = action.payload;
    },
    updatePressureUnit: (state, action) => {
      state.unit.pressure = action.payload;
    },
    updateLanguage : (state,action) => {
      state.language = action.payload
    }
  },
});

export const {
  updateTemperatureUnit,
  updateWindSpeedUnit,
  updatePressureUnit,
  updateLanguage
} = unitSlice.actions;

export const getSettingState = (state) => state.setting;

export default unitSlice.reducer;
