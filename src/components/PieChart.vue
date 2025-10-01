<template>
  <div class="max-w-md mx-auto">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { computed } from "vue";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const props = defineProps({
  participation: {
    type: Array,
    required: true,
  },
});

const chartData = computed(() => ({
  labels: props.participation.map((item) => item.title),
  datasets: [
    {
      data: props.participation.map((item) => item.percent),
      backgroundColor: [
        "#F67280", // blue-400
        "#C06C84", // green-400
        "#6C5B7B", // yellow-400
        "#355C7D", // red-400
      ],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
}));

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "#1f2937", // 텍스트 색상 (Tailwind gray-800)
        font: {
          size: 14,
          weight: "bold",
        },
        boxWidth: 16,
        padding: 20,
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `${context.label}: ${context.parsed}%`;
        },
      },
    },
  },
};
</script>
