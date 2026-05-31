import { redirect } from 'next/navigation';

export default function Step4Redirect() {
  redirect('/form/step-1');
}
