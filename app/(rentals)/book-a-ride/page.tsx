import Button from "@/components/button";
import Image from "next/image";
import {
  Calendar,
  Car,
  Key,
  Shield,
  Star,
  DollarSign,
} from "lucide-react";
import car from '@/public/landing-page/car.jpg'

export default function BookARide() {
  return (
    <section className="mt-[128px] flex flex-col gap-y-6 px-4 pb-16 lg:pb-[112px] lg:px-16 lg:mt-[144px] ">
      {/* Hero Section */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          How EventTrio <br className="md:hidden" />
          works
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Skip the rental car counter and rent just about any car, just about
          anywhere
        </p>
        <div className="mt-8">
          <Button as="link" href="book-a-ride/search?limit=20">
            Find the perfect car
          </Button>
        </div>
      </div>

      {/* How It Works Steps Section */}
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Book the perfect car in 3 easy steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Car className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Find the perfect car</h3>
            <p className="text-gray-600">
              Enter a location and date, then browse thousands of cars shared by
              local hosts.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Book your trip</h3>
            <p className="text-gray-600">
              Book on the EventTrio  website. Choose a protection plan, and
              message the host with any questions.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Key className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hit the road</h3>
            <p className="text-gray-600">
              Have the car delivered or pick it up from your host. Check in with
              the app, then go explore!
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-black hover:bg-gray-800 text-white rounded-md px-6 py-3 text-base font-medium">
            Book your first trip
          </Button>
        </div>
      </div>

      {/* Host Section */}
      <div className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src={car}
              alt="Person standing next to a car"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Become an EventTrio host</h2>
            <p className="text-gray-600 mb-6">
              Share your car to earn extra income, or build a car sharing
              business. You&apos;re in control: set your price, availability, and
              rules.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <DollarSign className="h-5 w-5 text-gray-700" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Earn extra income</h3>
                  <p className="text-gray-600 text-sm">
                    The average host earns $10,516 annually*
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Star className="h-5 w-5 text-gray-700" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Set your own schedule</h3>
                  <p className="text-gray-600 text-sm">
                    Share your car only when it works for you
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-gray-700" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Insurance included</h3>
                  <p className="text-gray-600 text-sm">
                    Up to $750,000 in liability insurance from Liberty Mutual
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-black hover:bg-gray-800 text-white rounded-md px-6 py-3 text-base font-medium">
              Learn more about hosting
            </Button>

            <p className="text-xs text-gray-500 mt-4">
              *Average annual income of hosts who share one car and have been
              active on EventTrio for at least 12 months.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Ready to experience better car rental?
          </h2>
          <p className="text-gray-300 mb-8">
            Join millions of people finding better, more convenient car rental
            with EventTrio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-md px-6 py-3 text-base font-medium">
              Find your perfect car
            </Button>
            <Button
              as="link"
              href="/list-your-car"
              className="text-white border-white hover:bg-gray-800 rounded-md px-6 py-3 text-base font-medium"
            >
              Become a host
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
