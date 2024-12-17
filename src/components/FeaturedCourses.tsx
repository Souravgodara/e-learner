import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Book, ArrowRight, Trophy } from 'lucide-react'

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "AI/ML Basics",
      description: "Understanding how AI works behind the scene",
      lessons: 27,
      xp: 50,
      image: "/c1.png",
    },
    {
      id: 2,
      title: "Vectors",
      description: "Making sense of how various vectors are set up",
      lessons: 23,
      image: "/c2.png",
    },
    {
      id: 3,
      title: "Dev Ops",
      description: "Very short description of this topic and what to expect",
      lessons: 15,
      image: "/c3.png",
    },
  ]

  return (
    <>
      <h2 className="text-3xl font-semibold text-center mt-10 text-slate-800 dark:text-white">
        Browse Courses
      </h2>
      <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-primary/10 rounded-3xl border-none overflow-hidden">
            <CardHeader className="p-6">
              <div className="flex justify-center ">
                <img
                  src={course.image}
                  alt=""
                  className="rounded object-contain"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-2">
              <h3 className="font-semibold text-lg text-slate-800">
                {course.title}
              </h3>
              <p className="text-sm text-slate-600">
                {course.description}
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  <Book className="w-4 h-4" />
                  <span>{course.lessons} LESSONS</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                </div>
              </div>
              <Button
                variant="default"
                className="bg-blue-500 hover:bg-blue-600"
                size="sm"
              >
                View
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}

