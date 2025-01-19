"use client";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FaqItemProps {
    item: {
        id: number;
        question: string;
        answer: string;
    };
}

const FaqItem = ({ item }: FaqItemProps) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const answerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (answerRef.current) {
            if (showAnswer) {
                answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
                answerRef.current.style.opacity = "1";
            } else {
                answerRef.current.style.maxHeight = "0px";
                answerRef.current.style.opacity = "0";
            }
        }
    }, [showAnswer]);

    return (
        <div className="w-full flex flex-col gap-y-3 border-t border-black py-5">
            <div
                onClick={() => setShowAnswer(!showAnswer)}
                className="w-full flex justify-between items-center cursor-pointer"
            >
                <h6 className="font-bold lg:text-lg">{item.question}</h6>
                <IoIosArrowDown
                    className={cn(
                        "transition-transform duration-300",
                        showAnswer ? "rotate-180" : ""
                    )}
                />
            </div>
            <p
                ref={answerRef}
                className="text-sm transition-all duration-500 ease-in-out lg:text-base overflow-hidden max-h-0 opacity-0"
                style={{ transitionProperty: "max-height, opacity" }}
            >
                {item.answer}
            </p>
        </div>
    );
};

export default FaqItem;
