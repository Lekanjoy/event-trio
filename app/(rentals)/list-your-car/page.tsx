"use client";
import { submitCarListing } from "@/app/actions/carActions";
import Button from "@/components/button";
import { FormEvent, useState, useRef } from "react";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/dropzone";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";
import { useToast } from "@/hooks/use-toast";

export default function CarListingForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const imageUploadProps = useSupabaseUpload({
    bucketName: "car-images",
    allowedMimeTypes: ["image/*"],
    maxFiles: 4,
    maxFileSize: 1000 * 1000 * 10, // 10MB
  });

  const documentUploadProps = useSupabaseUpload({
    bucketName: "car-documents",
    allowedMimeTypes: ["application/pdf", "image/*"],
    maxFiles: 5,
    maxFileSize: 1000 * 1000 * 10, // 10MB
  });

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    // Reset the dropzone files
    imageUploadProps.setFiles([]);
    documentUploadProps.setFiles([]);
  };

  const handleListing = async (
    e: FormEvent<HTMLFormElement>,
    formData: FormData
  ) => {
    e.preventDefault();
    setLoading(true);

    // Add uploaded image URLs to formData
    if (imageUploadProps.successes.length > 0) {
      formData.append("images", JSON.stringify(imageUploadProps.successes));
    }

    // Add uploaded document URLs to formData
    if (documentUploadProps.successes.length > 0) {
      formData.append(
        "documents",
        JSON.stringify(documentUploadProps.successes)
      );
    }

    const res = await submitCarListing(formData);
    if (res.success) {
      setLoading(false);
      toast({
        title: "Success!",
        description: "Your car has been listed successfully.",
        variant: "default",
      });
      // Reset the form after successful submission
      resetForm();
    } else {
      setLoading(false);
      console.error(res.error);
      toast({
        title: "Error",
        description: res.error || "Failed to list your car. Please try again.",
        variant: "destructive",
      });
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
              <form
                ref={formRef}
                onSubmit={(e) =>
                  handleListing(e, new FormData(e.currentTarget))
                }
                className="space-y-6"
              >
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
                        max={new Date().getFullYear()}
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
                    <Dropzone {...imageUploadProps}>
                      <DropzoneEmptyState />
                      <DropzoneContent />
                    </Dropzone>
                  </div>

                  <div>
                    <label className="block text-sm lg:text-base font-medium mb-2">
                      Car Documents
                    </label>
                    <Dropzone {...documentUploadProps}>
                      <DropzoneEmptyState />
                      <DropzoneContent />
                    </Dropzone>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button
                    disabled={
                      loading ||
                      !imageUploadProps.isSuccess ||
                      !documentUploadProps.isSuccess
                    }
                    className="w-full rounded-md"
                  >
                    {loading ? "Submitting..." : "List"}
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
