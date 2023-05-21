import { NewMemoryForm } from '@/components/NewMemoryForm';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="text-gay-200 flex items-center gap-1 text-sm transition-colors hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <NewMemoryForm />
    </div>
  );
}
