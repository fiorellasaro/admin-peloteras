import { Events } from '@/components/pages/events';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: eventsData } = await supabase
    .from('event')
    .select('*')
    .order('id', { ascending: true });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Events events={eventsData} />
      </main>
    </>
  );
}
