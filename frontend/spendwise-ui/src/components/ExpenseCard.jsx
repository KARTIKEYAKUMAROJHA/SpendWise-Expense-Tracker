export default function ExpenseCard({ title, amount, icon, color = 'text-accent' }) {
  return (
    <div className="bg-secondary-bg rounded-lg p-6 border border-gray-700 hover:border-accent transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-text-primary text-sm mb-2">{title}</p>
          <h3 className="text-3xl font-bold text-accent">₹{amount.toFixed(2)}</h3>
        </div>
        <div className={`text-4xl ${color}`}>{icon}</div>
      </div>
    </div>
  );
}
