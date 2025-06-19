'use client'
import React, { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card } from '../ui/card'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar1, CalendarIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { format } from 'date-fns'

const TodoList = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className=''>
      <div className=' mb-4 flex flex-col gap-2'>
        <h1 className='font-bold'>Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className='w-full'>
              {' '}
              <CalendarIcon />
              {date ? format(date, 'PPP') : <span> Pick a Date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            {' '}
            <Calendar
              mode='single'
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
              className='rounded-lg border'
            />
          </PopoverContent>
        </Popover>
      </div>
      <ScrollArea className='h-[400px] overflow-y-auto rounded-md   '>
        {/* Task 1 */}
        <Card className='p-4 '>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-1' />
            <Label htmlFor='task-1' className='text-sm text-muted-foreground'>
              Edit thumbnail for latest video
            </Label>
          </div>
        </Card>

        {/* Task 2 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-2' />
            <Label htmlFor='task-2' className='text-sm text-muted-foreground'>
              Write video description and tags
            </Label>
          </div>
        </Card>

        {/* Task 3 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-3' />
            <Label htmlFor='task-3' className='text-sm text-muted-foreground'>
              Schedule video upload
            </Label>
          </div>
        </Card>

        {/* Task 4 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-4' />
            <Label htmlFor='task-4' className='text-sm text-muted-foreground'>
              Reply to recent comments
            </Label>
          </div>
        </Card>

        {/* Task 5 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-5' />
            <Label htmlFor='task-5' className='text-sm text-muted-foreground'>
              Post teaser on Instagram/Twitter
            </Label>
          </div>
        </Card>

        {/* Task 6 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-6' />
            <Label htmlFor='task-6' className='text-sm text-muted-foreground'>
              Brainstorm ideas for next video
            </Label>
          </div>
        </Card>

        {/* Task 7 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-7' />
            <Label htmlFor='task-7' className='text-sm text-muted-foreground'>
              Analyze last video&apos;s performance
            </Label>
          </div>
        </Card>

        {/* Task 8 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-8' />
            <Label htmlFor='task-8' className='text-sm text-muted-foreground'>
              Create YouTube Shorts from highlights
            </Label>
          </div>
        </Card>

        {/* Task 9 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-9' />
            <Label htmlFor='task-9' className='text-sm text-muted-foreground'>
              Review copyright status & monetization
            </Label>
          </div>
        </Card>

        {/* Task 10 */}
        <Card className='p-4 mt-3'>
          <div className='flex items-center gap-3'>
            <Checkbox id='task-10' />
            <Label htmlFor='task-10' className='text-sm text-muted-foreground'>
              Update video playlists and categories
            </Label>
          </div>
        </Card>
      </ScrollArea>
    </div>
  )
}

export default TodoList
