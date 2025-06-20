'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  {
    month: 'January',
    subscriptions: 8700,
    ads: 3200,
    sponsorships: 1100,
    donations: 500,
  },
  {
    month: 'February',
    subscriptions: 9100,
    ads: 3400,
    sponsorships: 900,
    donations: 400,
  },
  {
    month: 'March',
    subscriptions: 9400,
    ads: 3000,
    sponsorships: 1500,
    donations: 600,
  },
  {
    month: 'April',
    subscriptions: 10200,
    ads: 3600,
    sponsorships: 1200,
    donations: 700,
  },
  {
    month: 'May',
    subscriptions: 9900,
    ads: 4100,
    sponsorships: 1000,
    donations: 800,
  },
  {
    month: 'June',
    subscriptions: 11000,
    ads: 3900,
    sponsorships: 1300,
    donations: 650,
  },
]

const chartConfig = {
  subscriptions: {
    label: 'Subscriptions',
    color: 'var(--chart-1)',
  },
  ads: {
    label: 'Ads',
    color: 'var(--chart-2)',
  },
  sponsorships: {
    label: 'Sponsorships',
    color: 'var(--chart-3)',
  },
  donations: {
    label: 'Donations',
    color: 'var(--chart-4)',
  },
} satisfies ChartConfig

export function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Revenue by Source</CardTitle>
      </CardHeader>
      <CardContent className='pl-0'>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey='subscriptions' fill='var(--chart-1)' radius={4} />
            <Bar dataKey='ads' fill='var(--chart-2)' radius={4} />
            <Bar dataKey='sponsorships' fill='var(--chart-3)' radius={4} />
            <Bar dataKey='donations' fill='var(--chart-4)' radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
