# Donut Charts
install:
```npm install --save chart.js react-chartjs-2```
## import and use individual components:
```import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

<Doughnut data={...} />
