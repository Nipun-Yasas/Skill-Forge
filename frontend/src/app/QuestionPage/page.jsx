// app/page.js or pages/index.js

import QuestionForm from '../components/QuestionForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-4">
      <QuestionForm />
    </main>
  );
}
