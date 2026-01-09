"use client";

import Hero from "@/components/ui/animated-shader-hero";
import { Zap, Shield, Rocket } from "lucide-react";

// Demo Component showing how to use the Hero
const HeroDemo: React.FC = () => {
    const handlePrimaryClick = () => {
        console.log('Get Started clicked!');
    };

    const handleSecondaryClick = () => {
        console.log('Explore Features clicked!');
    };

    return (
        <div className="w-full">
            <Hero
                trustBadge={{
                    text: "Trusted by forward-thinking teams.",
                    icons: [<Zap key="1" size={16} />, <Rocket key="2" size={16} />]
                }}
                headline={{
                    line1: "Launch Your",
                    line2: "Workflow Into Orbit"
                }}
                subtitle="Supercharge productivity with AI-powered automation and integrations built for the next generation of teams — fast, seamless, and limitless."
                buttons={{
                    primary: {
                        text: "Get Started for Free",
                        onClick: handlePrimaryClick
                    },
                    secondary: {
                        text: "Explore Features",
                        onClick: handleSecondaryClick
                    }
                }}
            />
        </div>
    );
};

export default HeroDemo;
