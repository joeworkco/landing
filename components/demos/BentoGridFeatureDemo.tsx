import { FeatureSectionWithBentoGrid } from "@/components/ui/feature-section-with-bento-grid";
import { AlertTriangle, FileText, ShieldCheck, Zap } from "lucide-react"; // Example icons

const exampleItems = [
  {
    icon: <FileText className="w-6 h-6 stroke-1" />,
    title: "Pay Supplier Invoices",
    description:
      "Our goal is to streamline SMB trade, making it easier and faster.",
    lgColSpan: 2,
  },
  {
    icon: <AlertTriangle className="w-6 h-6 stroke-1" />,
    title: "Automated Reconciliation",
    description:
      "Automatically match payments with invoices, saving you hours.",
    lgColSpan: 1,
  },
  {
    icon: <Zap className="w-6 h-6 stroke-1" />,
    title: "Instant Payouts",
    description: "Access your funds faster with our instant payout system.",
    lgColSpan: 1,
  },
  {
    icon: <ShieldCheck className="w-6 h-6 stroke-1" />,
    title: "Secure Transactions",
    description: "Bank-level security for all your financial operations.",
    lgColSpan: 2,
  },
];

function BentoGridFeatureDemo() {
  return (
    <div className="w-full">
      <FeatureSectionWithBentoGrid
        badgeText="Our Platform"
        mainTitle="Streamline Your Business Operations"
        mainDescription="Managing a small business is tough. Our platform provides the tools you need to succeed, making complex tasks simple and efficient."
        items={exampleItems}
      />
    </div>
  );
}

export { BentoGridFeatureDemo };
