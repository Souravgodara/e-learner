import { Card, CardContent } from "@/components/ui/card"
import { Headphones, Users, Video } from 'lucide-react'

export default function FeatureCards() {
    return (
        <div className="w-full max-w-8xl mx-auto mt-24 p-6">
            <div className="grid md:grid-cols-3 gap-6">
                <FeatureCard
                    icon={<Headphones className="w-8 h-8 text-blue-900 " />}
                    title="Audio & Video"
                    description="Included audio and video for all course"
                />
                <FeatureCard
                    icon={<Video className="w-8 h-8 text-blue-900" />}
                    title="Virtual Classroom"
                    description="Virtual learning know as a learning platform"
                />
                <FeatureCard
                    icon={<Users className="w-8 h-8 text-blue-900" />}
                    title="Group Learning"
                    description="A place vai socialxin a computer or mobile"
                />
            </div>
        </div>
    )
}

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="p-3 bg-blue-200 rounded-lg">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                    {title}
                </h3>
                <p className="text-sm text-slate-600">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}
