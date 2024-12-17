import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Video, Library } from 'lucide-react'
import Image from "next/image"

export default function PremiumLearningCard() {
    return (
        <Card className="w-full max-w-7xl mx-auto bg-white p-8 mt-10 border-none">
            <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-semibold text-slate-800 ">
                                Premium Learning Experience
                            </h1>
                            <p className="text-slate-600">
                                Enjoy a premium learning experience with our state-of-the-art platform, personalized support, and engaging content.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-r from-purple-100/80 to-blue-100/80 rounded-2xl p-6">
                                <div className="max-w-[230px] space-y-4">
                                    <h2 className="text-xl font-semibold text-slate-800">
                                        Quality online courses for all!
                                    </h2>
                                    <Button>
                                        Get Started
                                    </Button>
                                </div>
                                <Image
                                    src="premium-learning-experience.svg"
                                    alt="Student with folders"
                                    className="absolute right-0 bottom-0 h-[90%] object-contain"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Features */}
                    <div className="space-y-8">
                        <FeatureItem
                            icon={<BookOpen className="h-6 w-6 text-blue-900" />}
                            title="Online courses from experts"
                            description="Learn from industry leaders and experts with our comprehensive online courses. Gain the skills and knowledge you need to succeed in your field."
                        />
                        <FeatureItem
                            icon={<Library className="h-6 w-6 text-blue-900" />}
                            title="Over 500+ high quality topics"
                            description="Explore a vast library of over 500 high-quality courses covering a wide range of subjects."
                        />
                        <FeatureItem
                            icon={<Video className="h-6 w-6 text-blue-900" />}
                            title="Occasional video update"
                            description="Stay updated with occasional video content that provides fresh insights and keeps you engaged with the latest trends and information in your chosen field."
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

interface FeatureItemProps {
    icon: React.ReactNode
    title: string
    description: string
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
        <div className="flex gap-4">
            <div className="h-12 w-12 rounded-xl bg-purple-100/50 flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-slate-800">{title}</h3>
                <p className="text-slate-600 text-sm">{description}</p>
            </div>
        </div>
    )
}