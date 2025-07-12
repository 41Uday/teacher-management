import PaymentForm from "@features/teachers/components/PaymentForm";
import Header from "@shared/components/layout/Header";

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <Header />
      <PaymentForm />
    </div>
  );
}
