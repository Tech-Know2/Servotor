"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "Generic",
    items: [
      { question: "Servotor?", answer: "We are a small cloud based solution company were we help you launch your servers, websites, and virtual machines for low costs and with incredible ease." },
      { question: "How do I contact support?", answer: "You can email us at support@servotor.com or you can open a ticket in your dashboard." },
    ],
  },
  {
    title: "Game Servers",
    items: [
      { question: "How do I set up a game server?", answer: "We have several dozen tutorials in our knowledge base that you can follow along with." },
      { question: "Which games are supported?", answer: "You can see a list of games that is searchable on the 'Game Servers' page." },
      { question: "Can I upgrade my server?", answer: "Yes, you can upgrade your server from your account dashboard." },
      { question: "What is the uptime guarantee?", answer: "We offer a 99.9% uptime guarantee on all game servers." },
      { question: "Is DDoS protection included?", answer: "Yes, all game servers come with DDoS protection included." },
    ],
  },
  {
    title: "Web Servers",
    items: [
      { question: "How do I deploy a website?", answer: "We have several dozen tutorials in our knowledge base that you can follow along with." },
      { question: "How do backups work?", answer: "We do snapshot backups of our servers with your content, but then we also allow you to customize your backups too." },
      { question: "What CMS' are supported?", answer: "We have several one click, instant installs such as Wordpress, PrestaShop, Joomla. But we also have to tools for self hosting and deploying custom applications." },
      { question: "How does Email Management Work?", answer: "We have a whole bunch of tutorials on our knowledge base covering emails and interacting with your mail." },
      { question: "How does DNS Management Work?", answer: "We have a whole bunch of tutorials on our knowledge base covering domains and using them the create emails, and connect to sites and subdomains." },
    ],
  },
  {
    title: "AI",
    items: [
      { question: "How many models can I access?", answer: "With one subscription get access to over a thousand AI models including GPT-4o, Llama 3, and more." },
      { question: "How do I use it?", answer: "You interact with the models through your user panel with us." },
    ],
  },
  {
    title: "VPS",
    items: [
      { question: "What is a VPS?", answer: "A VPS is a Virtual Private Server that provides you with dedicated resources." },
      { question: "How do I manage my VPS?", answer: "You can manage your VPS via SSH or our through our customized Virtualizor control panel." },
      { question: "How do I upgrade my VPS?", answer: "Upgrades can be done through your account dashboard." },
    ],
  },
  {
    title: "Storage",
    items: [
      { question: "What storage options are available?", answer: "We offer block storage, object storage, and file storage solutions." },
      { question: "Is my data secure?", answer: "Yes, all data is encrypted and stored securely." },
      { question: "How do I access my stored data?", answer: "You can access your data via our web interface through your account dashboard." },
      { question: "What is the backup policy?", answer: "We provide regular backups for all storage solutions." },
      { question: "Can I expand my storage?", answer: "Yes, you can expand your storage at any time through your account dashboard." },
    ],
  },
  {
    title: "Email",
    items: [
      { question: "What is email hosting?", answer: "We provide a service that allows you to create emails with your domain. For example, support@servotor.com" },
    ],
  },
];

export default function FAQ() {
  const [activeSection, setActiveSection] = useState<string>("Generic");
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setActiveQuestion(prevQuestion => (prevQuestion === question ? null : question));
  };

  return (
    <div>
        <div>
            <h1 className="text-3xl text-center font-bold text-teal-800">
                FAQ
            </h1>
            <h1 className="text-3xl text-center font-bold text-teal-800">___</h1>
        </div>
        <div className="bg-slate-100 py-12 flex justify-center">
            <div className="w-[80%] flex">
                <div className="w-1/6 flex flex-col space-y-4">
                {faqSections.map(section => (
                    <button
                    key={section.title}
                    onClick={() => {
                        setActiveSection(section.title);
                        setActiveQuestion(null);
                    }}
                    className={`px-4 py-2 rounded-lg text-white font-bold text-md shadow-lg ${
                        activeSection === section.title ? "bg-teal-700 hover:bg-teal-800" : "bg-slate-400 hover:bg-slate-500"
                    }`}
                    >
                    {section.title}
                    </button>
                ))}
                </div>

                <div className="w-5/6 bg-white p-6 rounded-lg shadow-lg ml-4">
                {faqSections
                    .find(section => section.title === activeSection)
                    ?.items.map(item => (
                    <div key={item.question} className="mb-4">
                        <button
                        className="w-full text-left font-bold text-teal-700 text-lg"
                        onClick={() => toggleQuestion(item.question)}
                        >
                        {item.question}
                        </button>
                        {activeQuestion === item.question && (
                        <p className="mt-2 text-slate-800">{item.answer}</p>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            </div>
    </div>
  );
}
