import React, { useEffect, useState } from "react";

import { Chart as ChartJS, ArcElement, Legend, ChartData } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

import {
  defaultBackground,
  defaultDoughnut,
} from "../constants/doughnutConstant";
import { ICategories } from "../types/doughnutType";

import "../styles/doughnutChart.scss";

ChartJS.register(ArcElement, Legend, ChartDataLabels);

export const DoughnutChart: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  useEffect(() => {
    setCategories(modifyCategories());
  }, []);

  const modifyCategories = () => {
    const amountValue: number = defaultDoughnut.reduce(
      (acc, curr) => acc + curr.value,
      0
    );
    return defaultDoughnut.map((category, index) => ({
      ...category,
      percent: Math.round((category.value * 100) / amountValue),
      backgroundColor: defaultBackground[index],
    }));
  };

  const createData = (): ChartData<"doughnut", number[], unknown> => ({
    datasets: [
      {
        datalabels: {
          anchor: "center",
          borderWidth: 0,
          color: "#FFFFFF",
          formatter: (value: number) => `${value}%`,
          font: {
            size: 18,
          },
          textShadowColor: "#00000029",
        },
        data: categories.map((category) => category.percent),
        backgroundColor: defaultBackground.slice(0, categories.length),
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="doughnutChart">
      <div className="doughnutChart__chart">
        <Doughnut data={createData()} />
      </div>
      <h1 className="doughnutChart__title">Blue Chips:</h1>
      <div className="doughnutChart__items">
        {categories.map(({ name, value, percent, backgroundColor }) => (
          <div className="doughnutChart__item" key={name}>
            <div className="doughnutChart__name">
              <span
                style={{ background: backgroundColor }}
                className="doughnutChart__circle"
              ></span>
              <p>{name}</p>
            </div>

            <div className="doughnutChart__value">{`${value} (+${percent}%)`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
