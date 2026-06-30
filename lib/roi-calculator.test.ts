import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { calculateRoi } from "./roi-calculator.ts";

describe("calculateRoi", () => {
  it("calcula horas y costo recuperable mensual y anual", () => {
    const result = calculateRoi({
      monthlyTasks: 1000,
      minutesPerTask: 6,
      hourlyCost: 20,
      automatablePercentage: 60,
    });

    assert.deepEqual(result, {
      currentHours: 100,
      recoverableHours: 60,
      monthlyRecoverableCost: 1200,
      annualRecoverableCost: 14400,
    });
  });

  it("devuelve cero cuando no hay volumen", () => {
    assert.deepEqual(
      calculateRoi({
        monthlyTasks: 0,
        minutesPerTask: 10,
        hourlyCost: 15,
        automatablePercentage: 50,
      }),
      {
        currentHours: 0,
        recoverableHours: 0,
        monthlyRecoverableCost: 0,
        annualRecoverableCost: 0,
      },
    );
  });

  it("limita el porcentaje automatizable al rango de 0 a 100", () => {
    const result = calculateRoi({
      monthlyTasks: 60,
      minutesPerTask: 10,
      hourlyCost: 10,
      automatablePercentage: 140,
    });

    assert.equal(result.recoverableHours, 10);
  });

  it("trata valores negativos o no finitos como cero", () => {
    const result = calculateRoi({
      monthlyTasks: -10,
      minutesPerTask: Number.NaN,
      hourlyCost: -5,
      automatablePercentage: -20,
    });

    assert.deepEqual(result, {
      currentHours: 0,
      recoverableHours: 0,
      monthlyRecoverableCost: 0,
      annualRecoverableCost: 0,
    });
  });
});
