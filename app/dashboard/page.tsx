'use client'
import Chart from 'react-apexcharts'
import Card from '../components/Card'
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const kmPerDay = [30, 40, 35, 50, 55, 60, 55]

const chartState = {
  options: {
    chart: {
      id: 'apexchart-example',
      foreColor: '#bbb',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: daysOfWeek,
    },
  },
  series: [
    {
      name: 'series-1',
      data: kmPerDay,
    },
  ],
}

const Dashboard = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Welcome, <span className="text-primary-600">John</span>!
        </h2>
      </div>
      <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
        <Card
          header="Running"
          Actions={<div />}
          Content={
            <Chart
              options={chartState.options}
              series={chartState.series}
              type="line"
              width="100%"
              height={320}
            />
          }
        />
        <Card
          header="Cycling"
          Actions={<div />}
          Content={
            <Chart
              options={chartState.options}
              series={chartState.series}
              type="line"
              width="100%"
              height={320}
            />
          }
        />
      </div>
    </div>
  </section>
)

export default Dashboard
