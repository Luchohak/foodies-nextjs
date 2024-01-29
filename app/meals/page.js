import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/share">Share</Link>
      <Link href="/meals/meal-1">Burger</Link>
      <Link href="/meals/meal-2">Tacos</Link>
    </main>
  );
}
