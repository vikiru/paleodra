import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
    return (<section className="bg-linear-to-r from-primary-700 to-primary-800 py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary sm:text-4xl">
                Ready to Start Your Dino Journey?
            </h2>
            <p className="mb-8 text-lg">
                Discover, learn, and explore the fascinating world of dinosaurs
            </p>
            <div className="flex justify-center">
                <Button asChild size={"xl"}>
                    <Link className="text-base" href="/explore">
                        Start Exploring
                    </Link>
                </Button>
            </div>
        </div>
    </section>)
}