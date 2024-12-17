import { Button } from '@/components/ui/button'

export default function CTA() {
    return (
        <section className="px-4 py-16 bg-gradient-to-r from-blue-700 to-blue-400 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of students who are already advancing their careers with our courses.
            </p>
            <Button size="lg" variant="secondary">
                Get Started Today
            </Button>
        </section>
    )
}
