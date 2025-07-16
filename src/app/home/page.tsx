"use client";

import { useEffect } from "react";
import Header from "@/components/header";
import MintForm from "@/components/MintForm";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 768;
    const config = isMobile
      ? { small: 200, medium: 100, large: 50 }
      : { small: 1000, medium: 675, large: 535 };

    const starField = document.createElement("div");
    starField.className = "star-field";
    document.body.appendChild(starField);

    const createStars = (count: number, size: string) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = `star ${size}`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starField.appendChild(star);
      }
    };

    createStars(config.small, "star-small");
    createStars(config.medium, "star-medium");
    createStars(config.large, "star-large");

    return () => {
      document.body.removeChild(starField);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 text-white relative overflow-hidden">
        {/* Decorative Orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-[#7C3AED] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-96 h-96 bg-[#EC4899] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>

        {/* Content */}
        <div className="relative min-h-screen bg-gradient-to-b from-transparent via-[#060508]/50 to-black/80">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Hero */}
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#3B82F6] bg-clip-text text-transparent">
                Bikin Token Solana Kamu, Mudah dan Cepat!
              </h1>
              <h2 className="text-3xl text-white/90 font-light">
                Cuma Butuh Beberapa Menit
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Gak perlu coding! Bikin token Solana kamu sekarang juga, siap
                dipakai untuk proyek kripto masa depan.
              </p>
            </div>

            {/* Mint Form */}
            <div className="max-w-4xl mx-auto">
              <MintForm />
            </div>

            {/* FAQ */}
            <div id="faq" className="scroll-mt-24 mt-20">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <FaqItem
                  question="What is the Solana Token Creator?"
                  answer="A user-friendly tool that lets you create your own SPL tokens on Solana in minutes—no coding required."
                />
                <FaqItem
                  question="Is it Safe to Create Solana Tokens Here?"
                  answer="Yes! We use secure blockchain-based processes and never access your private keys."
                />
                <FaqItem
                  question="How much time will it take?"
                  answer="Less than 5 minutes. Once confirmed, your token is ready in seconds."
                />
                <FaqItem
                  question="Which wallet can I use?"
                  answer="Use any Solana-compatible wallet like Phantom, Solflare, or Trust Wallet."
                />
                <FaqItem
                  question="How many tokens can I create per decimal amount?"
                  answer="Depends on decimals. For 6 decimals, up to 9,999,999,999,999,999 tokens can be created."
                />
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="scroll-mt-24 mt-20 mb-12">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-8 shadow-2xl text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Get in Touch
                </h3>
                <p className="text-gray-300">
                  Join our Telegram community for instant help and updates.
                </p>
                <a
                  href="https://t.me/mintora_sol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-lg">Join our Telegram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3 text-white">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  );
}
