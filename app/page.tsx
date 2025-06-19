import { ChartAreaGradient } from '@/components/charts/Areachart'
import { ChartBarMultiple } from '@/components/charts/Barchart'
import { ChartPieDonutText } from '@/components/charts/Piechart'
import CardList from '@/components/shared/CardList'
import TodoList from '@/components/shared/TodoList'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <ChartBarMultiple />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title='latest transactions' />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        {' '}
        <ChartPieDonutText />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <TodoList />
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'>
        <ChartAreaGradient />
      </div>{' '}
      <div className='bg-primary-foreground p-4 rounded-lg'>
        <CardList title='Popular Content' />
      </div>
    </div>
  )
}

export default page
