import { Button } from "@/components/ui/button";
import { X, FileText, LucideFullscreen } from "lucide-react";
import { extractCleanDocumentName } from "@/lib/extractName";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const DocPreview = ({ doc }: { doc: string }) => {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <span>{extractCleanDocumentName(doc)}</span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsViewOpen(!isViewOpen)}
            className=" text-gray-500"
          >
            {isViewOpen ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </Button>
          {isViewOpen && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="underline text-gray-600"
            >
              <LucideFullscreen />
            </Button>
          )}
        </div>
      </div>
      {isViewOpen && (
        <div
          className={`w-full ${
            isFullscreen
              ? "fixed inset-0 z-50 bg-white"
              : "h-[600px] border rounded"
          }`}
        >
          {isFullscreen && (
            <Button
              className="absolute top-16 right-6 z-50"
              variant="destructive"
              size="sm"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <iframe
            src={doc}
            className="w-full h-full"
            title={extractCleanDocumentName(doc) ?? undefined}
          />
        </div>
      )}
    </div>
  );
};

export default DocPreview;
