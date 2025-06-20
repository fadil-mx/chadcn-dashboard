'use client'
import React from 'react'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  username: z.string().min(2, 'atleast 2 letter needed').max(50),
  email: z.string().email(),
  phone: z.string().min(8, 'atleast 8 digit needed').max(15),
  location: z.string().min(2, 'atleast 2 letter needed').max(50),
  role: z.enum(['admin', 'user']),
})

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'max',
      email: 'test@gmail.com',
      phone: '1234567890',
      location: 'New York',
      role: 'user',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='mb-4'>Edit User</SheetTitle>
          <SheetDescription asChild>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  name='username'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder='Username' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder='Email' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public email address.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder='Phone' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public phone number.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='location'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder='Location' {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public Location name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='role'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='w-[180px]'>
                            <SelectValue placeholder='Select role' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='admin'>Admin</SelectItem>
                          <SelectItem value='user'>User</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        This is your role in the system.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type='submit'>Submit</Button>
              </form>
            </Form>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </div>
  )
}

export default EditUser
