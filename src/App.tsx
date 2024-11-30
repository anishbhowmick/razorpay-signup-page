import React from 'react';
import Logo from './components/Logo';
import SignUpForm from './components/SignUpForm';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        <Card>
          <div className="max-w-lg mx-auto">
            <Header />
            <SignUpForm />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;