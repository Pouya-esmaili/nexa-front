import { redirect } from 'next/navigation';

export default function Step2Redirect() {
  redirect('/form/step-1');
}
