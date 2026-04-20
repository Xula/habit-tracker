import HabitCard from "@/components/HabitCard";
import PageHeader from "@/components/_shared/PageHeader";
import Button from "@/components/_shared/Button";

export default function Dashboard() {
  const habits = [
    { id: 1, name: "Beber Água", current: 12, max: 20 },
    { id: 2, name: "Academia", current: 5, max: 14 },
    { id: 3, name: "Leitura", current: 3, max: 3 },
    { id: 4, name: "Sem Redes Sociais", current: 1, max: 7 },
  ];

  return (
    <div className="min-h-screen bg-[#020617] p-6 lg:p-12 text-slate-200">
      <div className="max-w-6xl mx-auto">
        <PageHeader
          title={
            <>
              Sua <span className="text-indigo-500">Jornada</span>
            </>
          }
          description="Monitorando sua evolução dia após dia."
        >
          <Button variant="primary">+ Novo Hábito</Button>
        </PageHeader>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                name={habit.name}
                currentStreak={habit.current}
                maxStreak={habit.max}
              />
            ))}
          </div>
        </main>

        <footer className="mt-20 border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
          &copy; 2026 Breakin the Habit • Desenvolvido com Antigravity
        </footer>
      </div>
    </div>
  );
}
