'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            content: "Highly recommend this platform! The quality of the courses and the expertise of the instructors are unmatched.",
            author: "Sahil Kumar",
            image: "/placeholder.svg?height=40&width=40",
            rating: 5
        },
        {
            id: 2,
            content: "I've learned so much from these courses. The interactive content makes complex topics easy to understand.",
            author: "Rajeev Dusad",
            image: "/placeholder.svg?height=40&width=40",
            rating: 5
        },
        {
            id: 3,
            content: "This platform has transformed my learning experience. The user-friendly interface and variety of courses are amazing.",
            author: "Sourabh Godara",
            image: "/placeholder.svg?height=40&width=40",
            rating: 5
        }
    ]

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-10">
            <div className="text-center space-y-4 mb-12 ">
                <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
                    What Our Students Say
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto dark:text-white">
                    Hear from our students about their experiences with E-Learning. Our expert-led courses and flexible learning options have helped them achieve their goals. Read their stories below!
                </p>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="pl-2 md:pl-4  md:basis-1/2 lg:basis-1/3">
                            <Card className=" dark:bg-neutral-200 shadow-sm h-48 ">
                                <CardContent className="p-6">
                                    <div className="flex flex-col justify-between h-40">
                                        <p className="text-slate-600 ">
                                            {testimonial.content}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Avatar>
                                                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-medium text-slate-800">
                                                    {testimonial.author}
                                                </span>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

