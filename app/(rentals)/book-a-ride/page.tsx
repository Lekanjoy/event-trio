import Button from '@/components/button'
import React from 'react'

const BookARide = () => {
  return (
    <section className="mt-[128px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px] ">
        Book A Ride
        <Button as="link" href='book-a-ride/search'>Browse</Button>
    </section>
  )
}

export default BookARide