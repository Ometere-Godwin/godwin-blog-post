import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <RegisterForm />
      </div>
    </div>
  );
}