"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const featureItems = [
  {
    id: 1,
    title: "Interactive Dashboard",
    description: "Experience a colorful and informative dashboard with an interactive map to visualize your global business reach. Monitor sales, invoicing, quote-to-order ratios, and company performance against targets with shortcut icons for easy navigation.",
    link: "/features/market-data"
  },
  {
    id: 2,
    title: "Sales Management",
    description: "Set and monitor company and individual sales targets in various currencies. Track quote-to-order ratios, customer maintenance, and merge companies with different offices or trading names for effective management.",
    link: "/features/automated-trading"
  },
  {
    id: 3,
    title: "Quoting",
    description: "Create, manage, and send quotes using live franchised stock and price checkers. Add descriptions and images, handle single-line items or full BOMs, and customize pricing margins. Easily offer price breaks with instant second-line addition.",
    link: "/features/risk-management"
  },
  {
    id: 4,
    title: "Customer and Supplier Management",
    description: "Manage customers and suppliers with a single company record. Set different terms and currencies, merge and associate companies, monitor interactions, rate companies, and manage their shipping and invoice addresses.",
    link: "/features/market-data"
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Efficiently manage your inventory with ecommerce integration, store locations, pictures, and datasheets. Handle consignments and costings, and export stocklists for seamless operations.",
    link: "/features/automated-trading"
  },
  {
    id: 6,
    title: "Shipping Management",
    description: "Integrate EasyPost with your system to manage shipments, collections, and deliveries. Track packages online, and generate commercial invoices and customs paperwork effortlessly.",
    link: "/features/risk-management"
  },
  {
    id: 7,
    title: "Purchasing",
    description: "Streamline purchasing with one-click online purchasing for web shop suppliers, authorized spend control on purchase orders, and management of back orders, sourcing, and resourcing. Receive detailed email notifications for purchase order arrivals.",
    link: "/features/risk-management"
  },
  {
    id: 8,
    title: "Quality Management",
    description: "Ensure ISO compliance with a multi-step inspection process, visual inspection checklists, incoming inspection reports, and non-conforming material management. Track inspection authorizations and manage the RMA process with up-to-date analysis.",
    link: "/features/risk-management"
  },
  {
    id: 10,
    title: "Financial Control",
    description: "Integrate your accounting software API for a fully compatible interface, reducing manual errors and streamlining invoicing. Generate live financial reports and manage multi-currency invoices effortlessly.",
    link: "/features/risk-management"
  },
  {
    id: 11,
    title: "Excess Stock Management",
    description: "Optimize excess stock management with a dedicated dashboard, live monitoring of bids, quotes, and purchases, consigned inventory tracking, and stock and financial report generation. Incorporate WooCommerce Auto Posting for added efficiency.",
    link: "/features/risk-management"
  },
  {
    id: 12,
    title: "User Stock Management",
    description: "Customize user permissions with pre-set profiles or create your own. Add user personnel files and commission structures for a flexible, tailored experience.",
    link: "/features/risk-management"
  },
  {
    id: 13,
    title: "Business Reporting",
    description: "Utilize a full range of business reporting tools in our reporting suite to keep track of your business in real-time.",
    link: "/features/risk-management"
  },
  {
    id: 14,
    title: "Web-based Secure Access Anywhere",
    description: "Access your data securely from anywhere and on any device, keeping your information safe and under your control.",
    link: "/features/risk-management"
  },
  {
    id: 15,
    title: "Flexible Licensing",
    description: "Activate licenses with one click for easy, fast onboarding of new users. Available in most languages and currencies for global compatibility.",
    link: "/features/risk-management"
  }
  
];

export default function FeatureDiv() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 w-[60%] mx-auto gap-4">
        {featureItems.map((item, idx) => (
          <Link
            href={item.link}
            key={item.id} // Using unique id instead of link
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl "
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 shadow-lg group-hover:shadow-xl transition-all duration-200 relative z-20 dark:bg-[#22263e]",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-900 font-bold tracking-wide mt-4 dark:text-white", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm dark:text-white",
        className
      )}
    >
      {children}
    </p>
  );
};
