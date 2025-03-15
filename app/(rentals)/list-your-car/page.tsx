"use client";
import { submitCarListing } from "@/app/actions/carActions";
import Button from "@/components/button";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { IoMdImages } from "react-icons/io";
import { VscFileSubmodule } from "react-icons/vsc";

export default function CarListingForm() {
  const [loading, setLoading] = useState(false);
  const imgRef = useRef<HTMLSpanElement>(null);
  const docRef = useRef<HTMLSpanElement>(null);

  const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
    const fileCount = e.target.files?.length ?? 0;
    if (fileCount > 0 && imgRef.current) {
      imgRef.current.textContent = `${fileCount} image${
        fileCount > 1 ? "(s)" : ""
      } selected`;
    }
  };

  const handleDocs = (e: ChangeEvent<HTMLInputElement>) => {
    const fileCount = e.target.files?.length ?? 0;
    if (fileCount > 0 && docRef.current) {
      docRef.current.textContent = `${fileCount} document${
        fileCount > 1 ? "(s)" : ""
      } selected`;
    }
  };

  const handleListing = async (
    e: FormEvent<HTMLFormElement>,
    formData: FormData
  ) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitCarListing(formData);
    if (res.success) {
      setLoading(false);
    } else {
      setLoading(false);
      console.error(res.error);
    }
  };

  return (
    <div className="mt-[50px] bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen lg:mt-[70px]">
      <div className="container mx-auto py-16 px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4 lg:text-3xl xl:text-4xl">
            List Your Car
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto lg:text-base xl:text-lg">
            Complete the form below to list your car for rental. High-quality
            images and proper documentation will increase your chances of a
            quick approval.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl mx-auto overflow-hidden md:max-w-[80%]">
          <div className="md:flex">
            {/* Form Section */}
            <div className="w-full p-8">
              <form onSubmit={(e) => handleListing(e, new FormData(e.currentTarget))} className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label
                      className="block text-sm lg:text-base font-medium mb-2"
                      htmlFor="name"
                    >
                      Car Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. Toyota Camry XLE"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm lg:text-base font-medium mb-2"
                        htmlFor="brand"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. Toyota"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm lg:text-base font-medium mb-2"
                        htmlFor="year"
                      >
                        Year
                      </label>
                      <input
                        type="number"
                        id="year"
                        name="year"
                        required
                        min="1900"
                        max="2025"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 2022"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm lg:text-base font-medium mb-2"
                        htmlFor="location"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. New York, NY"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm lg:text-base font-medium mb-2"
                        htmlFor="price"
                      >
                        Price Per day ($)
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        required
                        min="0"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. 250"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm lg:text-base font-medium mb-2">
                      Car Images
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                      <input
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        accept="image/*"
                        required
                        className="hidden"
                        onChange={(e) => handleImages(e)}
                      />
                      <label
                        htmlFor="images"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <IoMdImages
                          className="mb-5"
                          size={80}
                          color="#6b7280"
                        />
                        <span className="text-primary font-medium">
                          Click to upload images
                        </span>
                        <span
                          ref={imgRef}
                          className="text-gray-500 text-sm mt-1"
                        >
                          Upload high-quality images of your car
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm lg:text-base font-medium mb-2">
                      Car Documents
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                      <input
                        type="file"
                        id="documents"
                        name="documents"
                        multiple
                        required
                        className="hidden"
                        onChange={(e) => handleDocs(e)}
                      />
                      <label
                        htmlFor="documents"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <VscFileSubmodule
                          className="mb-5"
                          size={80}
                          color="#6b7280"
                        />
                        <span className="text-primary font-medium">
                          Click to upload documents
                        </span>
                        <span
                          ref={docRef}
                          className="text-gray-500 text-sm mt-1"
                        >
                          Upload registration, title, service history, etc.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button
                    disabled={loading}
                    className="w-full rounded-md"
                  >
                    {loading ? 'Submitting...' : 'List'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
