import * as logos from "@/images/logos";
export const projectsData = [
    {
      title: "DeclareBem",
      techStack: [".Net 6", "SQLServer", "OCR", "Docker", "ChatBot"],
      description: "Extremely efficient chatbot that operates on WhatsApp (most popular messaging app in Brazil) to declare basic annual IRF taxes(this layer covers the biggest part of brazilian tax payer workers)",
      //logo: logos.TastyCloudLogo,
      link: {
        label: "DeclareBem",
        href: "https://www.declarebem.com.br",
      },
    },
    {
      title: "Mega - Inventory Control",
      techStack: ["Windows Forms", "C#", "RavenDB"],
      description: "Desktop Application to manage service provision and sales based companies. Provides inventory control, sales and entries records, also manages technician attendance to clients",
      //logo: logos.AmbitLogo,
    },
    {
      title: "WhatsAppAutomator",
      techStack: [".Net Core", "Docker", "RavenDB", "Puppeteer"],
      description: "Provides integration with any system through HTTP requests, send an object with phone number and message and it’s delivered within seconds via WhatsAppAndroid application that helps with booking a table in a restaurants",
      //logo: logos.BimLogo,
    },
    {
      title: "iConomize",
      techStack: ["iOS", "Swift", "SQLite", "XCUITest"],
      description: "Allow users to redeem discount coupons for partner establishments based on the user's current position and in various other criteria.",
      //logo: logos.CDGOLogo,
    },
  ]