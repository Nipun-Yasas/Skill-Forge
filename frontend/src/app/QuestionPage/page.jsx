// app/page.js or pages/index.js

import QuestionForm from '../components/QuestionForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-4">
      

      <div className='relative text-center py-2.5'>
        <h1 className='inline-block relative -left-4'>Ask a question</h1>
      </div>
      <QuestionForm />
    </main>
  );
}
