export default function MealDetailPage({ params }) {
  return (
    <main>
      <h1>Your mean</h1>
      <p>{params.mealId}</p>
    </main>
  );
}
