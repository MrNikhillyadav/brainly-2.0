import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Button } from './../components/ui/Button';

const NotFound = () => {
  return (
    <div className="flex min-h-screen bg-black text-white flex-col">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter text-primary md:text-6xl">
          404 - Page Not Found
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button  title="Go to homepage" size="lg" variant="primary" />
      </main>
    </div>
  );
};

export default NotFound;